import { offices } from "@/data/offices";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Northgo",
    url: "https://www.northgo.com",
    description: "Making logistics effortless.",
    foundingDate: "1988",
    email: "info.tpe@northgo.com",
    telephone: "+886-2-2531-8677",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7F., No. 10, Sec. 3, Minsheng E. Rd.",
      addressLocality: "Taipei City",
      postalCode: "104511",
      addressCountry: "TW",
    },
    department: offices.map((o) => ({
      "@type": "LocalBusiness",
      name: `Northgo ${o.city}`,
      email: o.email,
      telephone: o.tel,
      address: {
        "@type": "PostalAddress",
        streetAddress: o.address,
        addressCountry: o.country,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
