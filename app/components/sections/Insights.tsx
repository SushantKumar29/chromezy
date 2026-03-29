"use client";

import { INSIGHTS_CONTENT, ROUTES } from "@/app/mock/constants";
import styles from "@/app/styles/sections/Insights.module.css";
import InsightCard from "../cards/InsightCard";
import MotionWrapper from "../wrappers/MotionWrapper";

const Insights = () => {
  const { title, subtitle, linkIcon, insights } = INSIGHTS_CONTENT;

  return (
    <MotionWrapper
      as="section"
      id={ROUTES.insights}
      motionProps={{
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.8, ease: "easeOut" },
      }}
      className={styles.section}
    >
      <div className="mx-auto w-full max-w-full sm:max-w-8/10">
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {insights.map((item, i) => (
            <MotionWrapper
              key={item.id}
              className={styles.card}
              motionProps={{
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
              }}
            >
              <InsightCard linkIcon={linkIcon} insight={item} />
            </MotionWrapper>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
};

export default Insights;
