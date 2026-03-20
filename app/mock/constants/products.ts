import { ICON_BASE } from "./urls";

export const PRODUCTS_CONTENT = {
  title: "PRODUCT ENGINEERING",
  description:
    "Discover the impact of bespoke digital solutions tailored precisely to your business's distinct requirements. Our experienced team of professionals ensures you receive outstanding results that consistently exceed your expectations.",
  cards: [
    {
      title: "MVP",
      description:
        "We specialize in custom MVP development, focusing on tailored prototyping services to meet diverse client needs and ensure rapid market launch.",
      cta: "Talk to a Product Expert",
      tone: "mvp",
    },
    {
      title: "SaaS",
      description:
        "Take your business to new heights with our all-inclusive SaaS development services, delivering seamless digital experiences tailored to your customers' needs.",
      cta: "Talk to a Product Expert",
      tone: "saas",
    },
    {
      title: "AI",
      description:
        "We develop tailored AI solutions leveraging machine learning, NLP, and computer vision to automate and enhance decision-making.",
      cta: "Talk to a Product Expert",
      tone: "ai",
    },
    {
      title: "B2B & B2C Commerce Transformation",
      description:
        "We elevate commerce platforms including Shopify, Magento, Prestashop, and WooCommerce to boost conversions and engagement.",
      cta: "Talk to an Ecommerce Expert",
      tone: "commerce",
    },
  ],
};

export const PRODUCT_CARD_CONTENT = {
  badge: "Our Services",
  ctaIcon: `${ICON_BASE}/product-arrow.svg`,
  toneImages: {
    mvp: `${ICON_BASE}/products/mvp.svg`,
    saas: `${ICON_BASE}/products/sass.svg`,
    ai: `${ICON_BASE}/products/ai.svg`,
    commerce: `${ICON_BASE}/products/commerce.svg`,
  },
};
