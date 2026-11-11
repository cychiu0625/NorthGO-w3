import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function rgbToHex(c) {
  const r = Math.round(c[0] * 255);
  const g = Math.round(c[1] * 255);
  const b = Math.round(c[2] * 255);
  return (
    "#" +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
  );
}

function bezToPath(bez) {
  const { i, o, v, c } = bez;
  if (!v?.length) return "";
  let d = `M${v[0][0]},${v[0][1]}`;
  for (let n = 1; n < v.length; n++) {
    const prev = v[n - 1];
    const curr = v[n];
    const cp1 = [prev[0] + o[n - 1][0], prev[1] + o[n - 1][1]];
    const cp2 = [curr[0] + i[n][0], curr[1] + i[n][1]];
    d += ` C${cp1[0]},${cp1[1]} ${cp2[0]},${cp2[1]} ${curr[0]},${curr[1]}`;
  }
  if (c) {
    const prev = v[v.length - 1];
    const curr = v[0];
    const cp1 = [prev[0] + o[v.length - 1][0], prev[1] + o[v.length - 1][1]];
    const cp2 = [curr[0] + i[0][0], curr[1] + i[0][1]];
    d += ` C${cp1[0]},${cp1[1]} ${cp2[0]},${cp2[1]} ${curr[0]},${curr[1]} Z`;
  }
  return d;
}

function collectGroups(items, acc = []) {
  for (const item of items) {
    if (item.ty !== "gr") continue;
    const nested = item.it.filter((x) => x.ty === "gr");
    const shapes = item.it.filter((x) => x.ty === "sh");
    const fl = item.it.find((x) => x.ty === "fl");
    const tr = item.it.find((x) => x.ty === "tr");
    if (shapes.length && fl && tr) {
      acc.push({ shapes, fl, tr });
    }
    if (nested.length) collectGroups(nested, acc);
  }
  return acc;
}

function convert(jsonPath, outSvg) {
  const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  const logoLayer = data.layers.find((l) => l.nm === "Rest of logo");
  if (!logoLayer) throw new Error(`No Rest of logo in ${jsonPath}`);

  const lp = logoLayer.ks.p.k;
  const la = logoLayer.ks.a.k;
  const layerTx = lp[0] - la[0];
  const layerTy = lp[1] - la[1];

  const groups = collectGroups(logoLayer.shapes);
  const parts = groups.map(({ shapes, fl, tr }) => {
    const d = shapes.map((sh) => bezToPath(sh.ks.k)).join(" ");
    return {
      d,
      fill: rgbToHex(fl.c.k),
      tx: layerTx + tr.p.k[0],
      ty: layerTy + tr.p.k[1],
    };
  });

  const svgParts = parts
    .map(
      (p) =>
        `<g transform="translate(${p.tx},${p.ty})"><path fill-rule="evenodd" d="${p.d}" fill="${p.fill}"/></g>`
    )
    .join("\n");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1070 210" width="1070" height="210" role="img" aria-label="Northgo">
${svgParts}
</svg>
`;
  fs.writeFileSync(outSvg, svg);
  console.log("Wrote", path.relative(root, outSvg), "fills:", parts.map((p) => p.fill));
}

convert(
  path.join(
    root,
    "public/brand/teal-blue-extracted/animations/baaba8bf-a82c-443b-a5bf-713b21458c02.json"
  ),
  path.join(root, "public/brand/northgo-logo-teal-blue.svg")
);

convert(
  path.join(
    root,
    "public/brand/teal-white-extracted/animations/bf68cf13-d55f-4688-b6c2-73c113e75636.json"
  ),
  path.join(root, "public/brand/northgo-logo-teal-white.svg")
);
