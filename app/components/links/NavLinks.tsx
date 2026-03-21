import { ABOUT_ITEM, NAV_ITEMS } from "@/app/mock/constants";
import { NavLink } from "@/app/shared/ui/NavLink";
import styles from "@/app/styles/sections/Header.module.css";
import { NavLinksProps } from "@/app/types";

/*
  This NavLinks components is used to render the navigation links in the header section
*/

export const AboutUsLink = ({ className }: { className?: string }) => {
  const aboutLinkItem = ABOUT_ITEM;
  return (
    <NavLink
      key={aboutLinkItem.label}
      href={aboutLinkItem.href}
      className={`${className} ${styles.navLink} ${aboutLinkItem.selected ? styles.selectedNav : ""}`}
    >
      {aboutLinkItem.label}
    </NavLink>
  );
};

const NavLinks = ({ variant, onItemClick }: NavLinksProps) => {
  const isMobile = variant === "mobile";
  const linkClasses = isMobile ? `${styles.mobileNavLink}` : `${styles.navLink}`;

  return (
    <>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.label}
          href={item.href}
          className={`${item.selected ? styles.selectedNav : ""} ${linkClasses}`}
          onClick={onItemClick}
        >
          {item.label}
        </NavLink>
      ))}
      {isMobile && <AboutUsLink />}
    </>
  );
};

export default NavLinks;
