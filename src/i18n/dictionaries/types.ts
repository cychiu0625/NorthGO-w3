export type Dictionary = {
  meta: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
  };
  nav: {
    why: string;
    services: string;
    about: string;
    locations: string;
    contact: string;
    news: string;
    enquire: string;
    home: string;
  };
  footer: {
    tagline: string;
    company: string;
    services: string;
    legal: string;
    privacy: string;
    terms: string;
    cookies: string;
    disclaimer: string;
    rights: string;
    designed: string;
  };
  home: {
    heroTitle: string;
    heroHighlight: string;
    heroBody: string;
    purposeEyebrow: string;
    purposeTitle: string;
    purposeBody: string;
    servicesTitle: string;
    servicesBody: string;
    learnMore: string;
    whyTitle: string;
    whyBody: string;
    whyPoints: { title: string; body: string }[];
    trustTitle: string;
    trustStats: { value: string; label: string }[];
    industriesTitle: string;
    industries: string[];
    ctaTitle: string;
    ctaBody: string;
    ctaSecondary: string;
  };
  services: {
    freight: ServiceCopy;
    project: ServiceCopy & { servicesList?: string[] };
    warehouse: ServiceCopy;
    shipping: ServiceCopy;
  };
  about: {
    title: string;
    intro: string;
    visionTitle: string;
    vision: string;
    missionTitle: string;
    mission: string;
    valuesTitle: string;
    values: { title: string; body: string }[];
    storyTitle: string;
    story: string[];
  };
  locations: {
    title: string;
    intro: string;
    headOffice: string;
    tel: string;
    fax: string;
    email: string;
  };
  contact: {
    title: string;
    intro: string;
    formTitle: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    service: string;
    serviceOptions: string[];
    origin: string;
    destination: string;
    cargo: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    officesTitle: string;
  };
  news: {
    title: string;
    intro: string;
    empty: string;
    cta: string;
  };
  legal: {
    updated: string;
    privacyTitle: string;
    termsTitle: string;
    cookiesTitle: string;
    disclaimerTitle: string;
  };
  common: {
    getInTouch: string;
    backHome: string;
    comingSoonLocale: string;
  };
};

type ServiceCopy = {
  title: string;
  short: string;
  hero: string;
  sections: { title: string; body: string }[];
};
