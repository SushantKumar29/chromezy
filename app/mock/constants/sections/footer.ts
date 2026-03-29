import { ICON_BASE } from "@/app/mock/constants";

export const FOOTER_NAV_LEFT = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About Us", href: "#contact" },
  { id: "contact", label: "Career", href: "#contact" },
  { id: "stories", label: "Case Study", href: "#stories" },
  { id: "contact2", label: "Join the Team", href: "#contact", bold: true },
];

export const FOOTER_NAV_RIGHT = [
  { id: "ai", label: "AI", href: "#products" },
  { id: "mvp", label: "MVP", href: "#products" },
  { id: "saas", label: "SaaS", href: "#products" },
  { id: "commerce", label: "E-commerce", href: "#products" },
  { id: "contact", label: "Work with us", href: "#contact", blue: true },
];

export const FOOTER_CONTENT = {
  logo: {
    src: `${ICON_BASE}/logo-final.svg`,
    alt: "Chromezy logo",
    width: 130,
    height: 40,
  },
  description:
    "Not just about software & Product development; we're your tech partners, crafting modern digital solutions for next-gen excellence!",
  contact: {
    phone: "+1 315 308 0901",
    email: "sales@chromezy.com",
    phoneIcon: `${ICON_BASE}/footer/phone.svg`,
    emailIcon: `${ICON_BASE}/footer/mail.svg`,
  },
  copyright: {
    year: "2024",
    company: "Sks Designs, All Rights Reserved",
    designer: "Sushant Kumar",
  },
  links: { terms: "#", privacy: "#", designedBy: "#" },
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    facebookIcon: `${ICON_BASE}/footer/facebook.svg`,
    instagramIcon: `${ICON_BASE}/footer/instagram.svg`,
    linkedinIcon: `${ICON_BASE}/footer/linkedin.svg`,
  },
};
