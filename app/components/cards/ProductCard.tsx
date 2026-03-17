// app/components/cards/ProductCard.tsx
import { ServiceCardProps } from "@/app/types/products";
import Image from "next/image";
import { PRODUCT_CARD_CONTENT } from "@/app/mock/constants";
import styles from "@/app/styles/cards/ProductCard.module.css";

const ProductCard = ({ title, description, cta, tone }: ServiceCardProps) => {
  // Map tone to background class
  const bgClass = {
    mvp: styles.bgMvp,
    saas: styles.bgSaas,
    ai: styles.bgAi,
    commerce: styles.bgCommerce,
  }[tone];

  const decorativeImage = PRODUCT_CARD_CONTENT.toneImages[tone];

  return (
    <div className={`${styles.card} ${bgClass}`}>
      {/* Badge */}
      <div className={styles.badge}>{PRODUCT_CARD_CONTENT.badge}</div>

      {/* Decorative Image */}
      <div className={styles.decorativeImage}>
        <Image src={decorativeImage} alt="" width={180} height={180} priority={false} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      {/* CTA Button */}
      <a href="#contact" className={styles.ctaButton}>
        {cta}
        <span className={styles.ctaIconWrapper}>
          <Image
            src={PRODUCT_CARD_CONTENT.ctaIcon}
            alt=""
            width={200}
            height={200}
            className={styles.ctaIcon}
          />
        </span>
      </a>
    </div>
  );
};

export default ProductCard;
