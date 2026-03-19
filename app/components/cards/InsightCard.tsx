import Image from "next/image";
import styles from "@/app/styles/sections/Insights.module.css";
import { INSIGHTS_CONTENT } from "@/app/mock/constants";

const InsightCard = ({
  insight,
}: {
  insight: { title: string; description: string; image: string };
}) => {
  const { linkIcon } = INSIGHTS_CONTENT;
  return (
    <>
      <div className={styles.imageContainer}>
        <Image src={insight.image} alt={insight.title} fill className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.cardTitle}>{insight.title}</h3>

          <button
            id="readMore"
            name="Read more"
            className={styles.arrowButton}
            aria-label="readMore"
          >
            <Image src={linkIcon} alt="Arrow Icon" width={35} height={35} />
          </button>
        </div>

        <p className={styles.cardDescription}>{insight.description}</p>
      </div>
    </>
  );
};

export default InsightCard;
