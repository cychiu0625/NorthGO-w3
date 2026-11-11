export type Office = {
  id: string;
  city: string;
  cityZh: string;
  role?: string;
  roleZh?: string;
  address: string;
  addressZh: string;
  tel: string;
  fax?: string;
  email: string;
  country: string;
};

export const offices: Office[] = [
  {
    id: "tpe",
    city: "Taipei",
    cityZh: "台北",
    role: "Head Office",
    roleZh: "總公司",
    address: "7F., No. 10, Sec. 3, Minsheng E. Rd., Taipei City 104511, Taiwan",
    addressZh: "台灣台北市民生東路三段10號7樓（104511）",
    tel: "+886-2-2531-8677",
    fax: "+886-2-2531-8577",
    email: "info.tpe@northgo.com",
    country: "Taiwan",
  },
  {
    id: "txg",
    city: "Taichung",
    cityZh: "台中",
    address: "No. 4, Zhongheng 11th Rd., Taichung City 435058, Taiwan",
    addressZh: "台灣台中市中橫十一路4號（435058）",
    tel: "+886-4-2326-2580",
    fax: "+886-4-2326-0308",
    email: "info.txg@northgo.com",
    country: "Taiwan",
  },
  {
    id: "khh",
    city: "Kaohsiung",
    cityZh: "高雄",
    address: "19F-2, No.31 Hai-Pien Rd., Kaohsiung City 802609, Taiwan",
    addressZh: "台灣高雄市海邊路31號19樓之2（802609）",
    tel: "+886-7-335-0730",
    fax: "+886-7-336-4536",
    email: "info.khh@northgo.com",
    country: "Taiwan",
  },
  {
    id: "lax",
    city: "Los Angeles",
    cityZh: "洛杉磯",
    address: "119 S. Atlantic Blvd, Ste#301, Monterey Park, CA 91754, USA",
    addressZh: "119 S. Atlantic Blvd, Ste#301, Monterey Park, CA 91754, USA",
    tel: "+1-714-853-1088",
    email: "info.lax@northgo.com",
    country: "USA",
  },
  {
    id: "hcmc",
    city: "Ho Chi Minh",
    cityZh: "胡志明市",
    address:
      "5th Floor, No. 92D Nguyen Huu Canh Street, Ward 22, Binh Thanh District, Ho Chi Minh City, Vietnam",
    addressZh: "越南胡志明市平盛郡第22坊阮有景街92D號5樓",
    tel: "+84-28-9995-7368",
    email: "info.hcmc@northgo.com",
    country: "Vietnam",
  },
  {
    id: "tyo",
    city: "Tokyo",
    cityZh: "東京",
    address: "104-0041 6FL., Gran+Ginza-East 1-5-1 Shintomi, Chuo-Ku, Tokyo City, Japan",
    addressZh: "日本東京都中央區新富1-5-1 Gran+Ginza-East 6F（104-0041）",
    tel: "+81-3-6260-3944",
    fax: "+81-3-6260-3945",
    email: "info.tyo@northgo.com",
    country: "Japan",
  },
  {
    id: "osa",
    city: "Osaka",
    cityZh: "大阪",
    address:
      "530-0002 3FL., -B MF Sakura-Bashi Build, 2-6-23 Sonezaki Shinchi, kita-ku, Osaka City, Japan",
    addressZh: "日本大阪市北区曾根崎新地2-6-23 MF桜橋ビル3F-B（530-0002）",
    tel: "+81-6-6676-8395",
    fax: "+81-6-6676-8397",
    email: "info.osa@northgo.com",
    country: "Japan",
  },
];

export const serviceSlugs = [
  "freight-logistics",
  "project-logistics",
  "warehouse-logistics",
  "shipping-agency",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export const CDN =
  "https://cdn.prod.website-files.com/66fc7398f8b5d731b52bcefb";

export const brandAssets = {
  heroShip:
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2400&q=80",
  planes: `${CDN}/670eea7be3b8c90fbb9dd350_NG_Planes-Duotone.avif`,
  plane: `${CDN}/670f316b486754409bb4725f_NG_Plane.webp`,
  icons: {
    freight: `${CDN}/670edf9ef0d787f2a49dab4e_NG_Icon_Freight-Logistics_Light.svg`,
    project: `${CDN}/670edfb3779a797a75795808_NG_Icon_Project-Logistics_Light.svg`,
    warehouse: `${CDN}/670edfcf4e938592ae5247a1_NG_Icon_Warehouset-Logistics_Light.svg`,
    shipping: `${CDN}/670edfe274c9824dfb26c7c9_NG_Icon_Port-Agency_Light.svg`,
  },
  certs: {
    iata: `${CDN}/671860be7769831e638d78ee_IATA_logo.svg`,
    iso: `${CDN}/671860be3eb68014f2d441db_ISO-45001_logo.svg`,
    aeo: `${CDN}/671860be6094af59950cf1c8_AEO_logo.webp`,
  },
};
