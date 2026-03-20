import Image from "next/image";
import { FOOTER_CONTENT } from "@/app/mock/constants";
import styles from "@/app/styles/sections/Footer.module.css";
import { NavLink } from "@/app/shared/ui/NavLink";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-2">
      <span className={styles.socialText}>Connect with us:</span>

      <NavLink href={FOOTER_CONTENT.social.facebook} className={styles.socialIcon}>
        <Image
          src={FOOTER_CONTENT.social.facebookIcon}
          alt="Facebook icon"
          width={24}
          height={24}
        />
      </NavLink>

      <NavLink href={FOOTER_CONTENT.social.instagram} className={styles.socialIcon}>
        <Image
          src={FOOTER_CONTENT.social.instagramIcon}
          alt="Instagram icon"
          width={24}
          height={24}
        />
      </NavLink>

      <NavLink href={FOOTER_CONTENT.social.linkedin} className={styles.socialIcon}>
        <Image
          src={FOOTER_CONTENT.social.linkedinIcon}
          alt="Linkedin icon"
          width={24}
          height={24}
        />
      </NavLink>
    </div>
  );
};

export default SocialLinks;
