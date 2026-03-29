import { ICON_BASE } from "../urls";

export const PRODUCT_LINK_ICON = `${ICON_BASE}/product-arrow.svg`;
export const PRODUCT_BADGE_TEXT = "Our Services";

export const PRODUCTS_CONTENT = {
  title: "PRODUCT ENGINEERING",
  description:
    "Discover the impact of bespoke digital solutions tailored precisely to your business's distinct requirements. Our experienced team of professionals ensures you receive outstanding results that consistently exceed your expectations.",
  badgeText: PRODUCT_BADGE_TEXT,
  ctaIcon: PRODUCT_LINK_ICON,
  cards: [
    {
      id: "mvp",
      title: "MVP",
      description:
        "We specialize in custom MVP development, focusing on tailored prototyping services to meet diverse client needs and ensure rapid market launch.",
      cta: "Talk to a Product Expert",
      tone: "mvp",
      icon: `${ICON_BASE}/products/mvp.svg`,
    },
    {
      id: "saas",
      title: "SaaS",
      description:
        "Take your business to new heights with our all-inclusive SaaS development services, delivering seamless digital experiences tailored to your customers' needs.",
      cta: "Talk to a Product Expert",
      tone: "saas",
      icon: `${ICON_BASE}/products/sass.svg`,
    },
    {
      id: "ai",
      title: "AI",
      description:
        "We develop tailored AI solutions leveraging machine learning, NLP, and computer vision to automate and enhance decision-making.",
      cta: "Talk to a Product Expert",
      tone: "ai",
      icon: `${ICON_BASE}/products/ai.svg`,
    },
    {
      id: "commerce",
      title: "B2B & B2C Commerce Transformation",
      description:
        "We elevate commerce platforms including Shopify, Magento, Prestashop, and WooCommerce to boost conversions and engagement.",
      cta: "Talk to an Ecommerce Expert",
      tone: "commerce",
      icon: `${ICON_BASE}/products/commerce.svg`,
    },
  ],
};
