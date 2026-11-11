import type { Dictionary } from "./types";

const zhTw: Dictionary = {
  meta: {
    siteName: "Northgo",
    defaultTitle: "Northgo — 讓物流變得輕鬆",
    defaultDescription:
      "Northgo 提供貨運、專案、倉儲與船務代理一站式物流服務，深耕超過 30 年，據點遍及台灣、美國、越南與日本。",
  },
  nav: {
    why: "為什麼選擇 Northgo",
    services: "服務項目",
    about: "關於我們",
    locations: "全球據點",
    contact: "聯絡我們",
    news: "最新消息",
    enquire: "立即詢價",
    home: "首頁",
  },
  footer: {
    tagline: "讓物流變得輕鬆。",
    company: "公司",
    services: "服務",
    legal: "法律資訊",
    privacy: "隱私權政策",
    terms: "服務條款",
    cookies: "Cookie 政策",
    disclaimer: "法律聲明",
    rights: "© {year} Northgo Inc. 版權所有。",
    designed: "品牌設計 Strategy Creative",
  },
  home: {
    heroTitle: "讓物流變得",
    heroHighlight: "輕鬆。",
    heroBody:
      "擁有逾 30 年經驗，Northgo 讓供應鏈更清楚、更有效率、更好管理——讓您的團隊專注成長。",
    purposeEyebrow: "我們的目的",
    purposeTitle: "物流本該簡單，我們讓它保持簡單。",
    purposeBody:
      "我們去除多餘複雜，提供透明解方——從貨運、專案貨物到倉儲與港務代理。",
    servicesTitle: "一站式物流解決方案",
    servicesBody: "涵蓋海運、空運、陸運、倉儲與港口作業，降低供應鏈摩擦。",
    learnMore: "了解更多",
    whyTitle: "為什麼選擇 Northgo？",
    whyBody: "深厚產業專業加上貼身協作，讓物流成為成長助力，而非負擔。",
    whyPoints: [
      {
        title: "流暢體驗",
        body: "端到端協調，讓貨物與決策都能順暢推進。",
      },
      {
        title: "專業貼身",
        body: "專家緊盯細節，在延誤發生前排除障礙。",
      },
      {
        title: "全球佈局，在地關懷",
        body: "據點遍及台灣、美國、越南與日本，提供 24/7 個人化支援。",
      },
    ],
    trustTitle: "為複雜貿易而生",
    trustStats: [
      { value: "30+", label: "年物流專業經驗" },
      { value: "7", label: "亞太與美國辦公室" },
      { value: "24/7", label: "個人化營運支援" },
      { value: "360°", label: "從規劃到交付完整覆蓋" },
    ],
    industriesTitle: "服務產業",
    industries: ["油氣", "離岸與海事", "基礎建設", "再生能源", "軌道", "一般貿易"],
    ctaTitle: "與 Northgo 攜手，讓物流更輕鬆",
    ctaBody: "告訴我們您的下一票貨或專案需求，我們會提出清晰可行的下一步。",
    ctaSecondary: "查看據點",
  },
  services: {
    freight: {
      title: "貨運物流",
      short: "可靠的海運、空運與陸運，搭配符合您航線的報關服務。",
      hero: "涵蓋陸、鐵、海、空的端到端貨運——安全、有效率且具成本效益。",
      sections: [
        {
          title: "海運",
          body: "進出口海運服務，穩定航次與審慎貨物處理。",
        },
        {
          title: "空運",
          body: "時效導向空運方案，從訂艙到交付皆可掌握。",
        },
        {
          title: "陸運",
          body: "整合優質卡車網絡，讓內陸段與海空運銜接順暢。",
        },
        {
          title: "報關",
          body: "稅則分類與通關專業，降低邊境風險與延遲。",
        },
      ],
    },
    project: {
      title: "專案物流",
      short: "超重超限貨物，從工程與路線勘查到交付全程管理。",
      hero: "整廠與專案貨物門到門運送——安全、工程與可靠協調貫穿全程。",
      sections: [
        {
          title: "工程解方",
          body: "內部工程團隊規劃複雜吊運、施工計畫與圖說。",
        },
        {
          title: "專案管理",
          body: "從發想至交付：租船、文件、多式聯運與 HSE 紀律。",
        },
        {
          title: "產業領域",
          body: "油氣、離岸海事、基礎建設、軌道與再生能源專案貨物。",
        },
      ],
      servicesList: [
        "租船管理",
        "路線勘查與可行性",
        "重吊與多式聯運",
        "關務諮詢",
        "即時可視化",
        "整體專案管理",
      ],
    },
    warehouse: {
      title: "倉儲物流",
      short: "位於戰略樞紐（含台中港）的彈性倉儲，搭配 WMS 可視與加值服務。",
      hero: "安全高效倉儲，服務一般貨物與離岸設備。",
      sections: [
        {
          title: "戰略據點",
          body: "台中港連接主要航運路線，具備大型與離岸專案能量。",
        },
        {
          title: "庫存掌控",
          body: "以 WMS 提供即時可視、準確庫存與迅速訂單處理。",
        },
        {
          title: "加值服務",
          body: "理貨包裝、套件組裝、貼標、檢驗重包與貨櫃租賃（含 DNV）。",
        },
      ],
    },
    shipping: {
      title: "船務代理",
      short: "港務與海事服務，守護船期、船員與商業利益。",
      hero: "主動港務協調——從靠泊、加油、補給到緊急支援。",
      sections: [
        {
          title: "港務代理",
          body: "完整／保護／加油／進塢／總務與交船代理。",
        },
        {
          title: "海事服務",
          body: "船員後勤、物料、檢驗、水下清潔、P&I 處理與救難支援。",
        },
        {
          title: "船型涵蓋",
          body: "乾散貨、油化、件雜貨、離岸、貨櫃、汽車船與特殊船舶。",
        },
      ],
    },
  },
  about: {
    title: "歡迎來到 Northgo",
    intro:
      "三十多年來，我們以可靠物流簡化複雜供應鏈，並在每個階段創造價值。",
    visionTitle: "願景",
    vision: "成為物流領域最受信賴的名字。",
    missionTitle: "使命",
    mission: "讓物流變得輕鬆。",
    valuesTitle: "價值觀",
    values: [
      {
        title: "以客戶為中心",
        body: "堅持做對的事，為客戶創造價值。",
      },
      {
        title: "誠信與透明",
        body: "誠實一致的溝通，讓客戶隨時掌握並充滿信心。",
      },
      {
        title: "創新與卓越",
        body: "持續改善貨物移動與營運支援方式。",
      },
      {
        title: "永續與責任",
        body: "降低環境影響，並回饋我們服務的社區。",
      },
    ],
    storyTitle: "我們的故事",
    story: [
      "1988 年於台北創立為萬海運通（Max Seair Logistics Inc.），以可靠與客戶優先著稱。",
      "2024 年 11 月 11 日正式更名為 Northgo，象徵前瞻布局，同時保留同一支專業團隊與標準。",
      "改變的是門口的名字；不變的是對貨運、專案、倉儲與船務代理客戶的承諾。",
    ],
  },
  locations: {
    title: "全球據點",
    intro: "七個辦公室遍佈台灣、美國、越南與日本，就近支援您的航線與專案。",
    headOffice: "總公司",
    tel: "電話",
    fax: "傳真",
    email: "電子郵件",
  },
  contact: {
    title: "駕馭複雜，交付簡單",
    intro: "留下您的需求，我們的團隊會儘速回覆。",
    formTitle: "詢價表單",
    name: "姓名",
    company: "公司",
    email: "公司 Email",
    phone: "電話",
    service: "所需服務",
    serviceOptions: ["貨運物流", "專案物流", "倉儲物流", "船務代理", "其他／不確定"],
    origin: "起運地",
    destination: "目的地",
    cargo: "貨物／專案說明",
    message: "其他細節",
    submit: "送出詢價",
    sending: "傳送中…",
    success: "感謝您。我們已收到詢價，將盡快與您聯繫。",
    error: "送出失敗。請再試一次，或來信 info.tpe@northgo.com。",
    officesTitle: "或直接聯絡各辦公室",
  },
  news: {
    title: "最新消息",
    intro: "最新公告將刊登於此。若需立即協助，請透過聯絡我們與團隊聯繫。",
    empty: "尚無文章，敬請期待。",
    cta: "聯絡 Northgo",
  },
  legal: {
    updated: "最後更新：2024 年 11 月 11 日",
    privacyTitle: "隱私權政策",
    termsTitle: "服務條款",
    cookiesTitle: "Cookie 政策",
    disclaimerTitle: "法律聲明",
  },
  common: {
    getInTouch: "與我們聯繫",
    backHome: "回到首頁",
    comingSoonLocale: "此語系將於第二階段完整上線，目前暫以英文內容呈現。",
  },
};

export default zhTw;
