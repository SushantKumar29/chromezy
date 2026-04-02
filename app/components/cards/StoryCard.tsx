import Image from "next/image";
import styles from "@/app/styles/sections/Stories.module.css";
import { StoryCardProps } from "@/app/types";

const StoryCard = ({ badgeText, linkIcon, card, large = true }: StoryCardProps) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.imageContainer} ${large ? styles.imageLarge : styles.imageSmall}`}>
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover"
        />

        <div className={styles.badge}>
          <span className={styles.badgeText}>{badgeText}</span>
        </div>

        <button
          id={card.id}
          name={`View: ${card.title}`}
          type="button"
          className={styles.linkButton}
          aria-label={card.id}
        >
          <Image src={linkIcon} alt="View More" width={35} height={35} />
        </button>
      </div>

      <div className={styles.contentOverlay}>
        <div className={styles.cardTitle}>{card.title}</div>
        <div className={styles.cardSubtitle}>{card.subtitle}</div>
      </div>
    </div>
  );
};

export default StoryCard;
