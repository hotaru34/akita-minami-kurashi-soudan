import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "秋田南くらし相談室",
  description:
    "秋田県南地域（羽後町・湯沢市・横手市）でくらしの困りごとをサポート。スマホやパソコンの操作、オンライン手続きなど、あなたのペースで一緒に解決します。",
  url: "https://akita-minami-kurashi-soudan.com",
  lang: "ja",
  locale: "ja_JP",
  author: "灯寧堂",
  twitter: "",
  ogImage: ogImage,
  socialLinks: {
    twitter: "",
    github: "",
    discord: "",
  },
  navLinks: [
    { text: "ホーム", href: "/" },
    { text: "できること", href: "/about" },
    { text: "価格表", href: "/services" },
    { text: "ブログ", href: "/blog" },
    { text: "おすすめ", href: "/recommended" },
    { text: "よくある質問", href: "/faq" },
    { text: "お問い合わせ", href: "/contact" },
  ],
  contact: {
    lineUrl: "https://lin.ee/UOFFIkf",
    googleFormUrl: "https://forms.gle/SW4PMX3e7sW6mVsi8",
  },
};
