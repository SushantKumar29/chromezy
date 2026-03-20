import Image from "next/image";
import { FOOTER_NAV_LEFT, FOOTER_NAV_RIGHT, FOOTER_CONTENT } from "@/app/mock/constants";
import styles from "@/app/styles/sections/Footer.module.css";
import { NavLink } from "@/app/shared/ui/NavLink";
import SocialLinks from "../links/SocialLinks";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-background px-4 py-12 md:py-20">
      <div className="mx-auto w-full max-w-full sm:max-w-8/10">
        <div className={styles.divider} />

        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          <div className="shrink-0 max-w-[320px]">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src={FOOTER_CONTENT.logo.src}
                alt={FOOTER_CONTENT.logo.alt}
                width={FOOTER_CONTENT.logo.width}
                height={FOOTER_CONTENT.logo.height}
              />
            </div>

            <p className={`${styles.description} mb-5 pl-12`}>{FOOTER_CONTENT.description}</p>

            <div className="flex items-center gap-2 mb-6 pl-12">
              <NavLink href={FOOTER_CONTENT.links.terms} className={styles.legalLink}>
                Terms
              </NavLink>
              <span className={styles.legalDivider}>|</span>
              <NavLink href={FOOTER_CONTENT.links.privacy} className={styles.legalLink}>
                Privacy
              </NavLink>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className={styles.contactIcon}>
                <Image
                  src={FOOTER_CONTENT.contact.phoneIcon}
                  alt="Phone icon"
                  width={14}
                  height={14}
                />
              </div>
              <span className={styles.contactText}>{FOOTER_CONTENT.contact.phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className={styles.contactIcon}>
                <Image
                  src={FOOTER_CONTENT.contact.emailIcon}
                  alt="Email icon"
                  width={14}
                  height={14}
                />
              </div>
              <span className={styles.contactText}>{FOOTER_CONTENT.contact.email}</span>
            </div>
          </div>

          <div className="flex gap-16 lg:gap-24">
            <div className="flex flex-col gap-0 min-w-40">
              {FOOTER_NAV_LEFT.map((item, i) => (
                <NavLink
                  key={item.label}
                  href={item.href}
                  className={`
                    ${styles.navItem}
                    ${i === 0 ? styles.navItemBorderTop : ""}
                    ${item.bold ? styles.navItemBold : styles.navItemDefault}
                  `}
                >
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>

            <div className="flex flex-col gap-0 min-w-40">
              {FOOTER_NAV_RIGHT.map((item, i) => (
                <NavLink
                  key={item.label}
                  href={item.href}
                  className={`
                    ${styles.navItem}
                    ${i === 0 ? styles.navItemBorderTop : ""}
                    ${item.blue ? styles.navItemBlue : styles.navItemDefault}
                  `}
                >
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.divider} mt-12`} />

        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div
            className={`${styles.copyright} flex flex-wrap items-center gap-2 text-center sm:text-left`}
          >
            <span>Copyright © {FOOTER_CONTENT.copyright.year}</span>
            <span className={styles.legalDivider}>|</span>
            <span>{FOOTER_CONTENT.copyright.company}</span>
            <span className={styles.legalDivider}>|</span>
            <NavLink href={FOOTER_CONTENT.links.designedBy} className={styles.designerLink}>
              Designed by {FOOTER_CONTENT.copyright.designer}
            </NavLink>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
