import Image from "next/image";
import styles from "@/app/styles/sections/Stories.module.css";
import { STORIES_CONTENT } from "@/app/mock/constants";
import { StoryCardProps } from "@/app/types";

const StoryCard = ({ card, large = true }: StoryCardProps) => {
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
          <span className={styles.badgeText}>{STORIES_CONTENT.badge}</span>
        </div>

        <button
          id="viewStory"
          name="View Story"
          className={styles.linkButton}
          aria-label="viewStory"
        >
          <Image src={STORIES_CONTENT.linkIcon} alt="View More" width={35} height={35} />
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
