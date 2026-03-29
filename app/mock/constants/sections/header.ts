import { ROUTES } from "../routes";

export const NAV_ITEMS = [
  { id: "home", label: "Home", href: `#${ROUTES.home}`, selected: true },
  { id: "technologies", label: "Explore AI", href: `#${ROUTES.technologies}`, selected: false },
  { id: "clients", label: "Services", href: `#${ROUTES.clients}`, selected: false },
  { id: "stories", label: "E-commerce", href: `#${ROUTES.stories}`, selected: false },
  { id: "products", label: "Products", href: `#${ROUTES.products}`, selected: false },
  { id: "contact", label: "Blogs", href: `#${ROUTES.contact}`, selected: false },
];

export const ABOUT_ITEM = {
  id: "about",
  label: "About Us",
  href: `#${ROUTES.contact}`,
  selected: false,
};
