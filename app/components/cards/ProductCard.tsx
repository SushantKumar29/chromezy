import { ProductCardProps } from "@/app/types";
import Image from "next/image";
import styles from "@/app/styles/cards/ProductCard.module.css";
import { NavLink } from "@/app/shared/ui/NavLink";

const ProductCard = ({
  title,
  description,
  cta,
  tone,
  icon,
  badgeText,
  ctaIcon,
}: ProductCardProps) => {
  const bgClass = {
    mvp: styles.bgMvp,
    saas: styles.bgSaas,
    ai: styles.bgAi,
    commerce: styles.bgCommerce,
  }[tone];

  return (
    <div className={`${styles.card} ${bgClass}`}>
      <div className={styles.badge}>{badgeText}</div>

      <div className={styles.decorativeImage}>
        <Image src={icon} alt={tone} width={180} height={180} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <NavLink href="#contact" className={styles.ctaButton}>
        {cta}
        <span className={styles.ctaIconWrapper}>
          <Image src={ctaIcon} alt="Contact" width={200} height={200} className={styles.ctaIcon} />
        </span>
      </NavLink>
    </div>
  );
};

export default ProductCard;
