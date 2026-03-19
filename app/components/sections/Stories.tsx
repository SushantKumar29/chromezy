"use client";

import StoryCard from "../cards/StoryCard";
import { STORIES_CONTENT } from "@/app/mock/constants";
import styles from "@/app/styles/sections/Stories.module.css";
import MotionWrapper from "../wrappers/MotionWrapper";

const Stories = () => {
  const { title, description, cards } = STORIES_CONTENT;

  return (
    <MotionWrapper
      as="section"
      id="stories"
      className={`w-full px-4 py-12 md:py-20 ${styles.section}`}
      motionProps={{
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.8, ease: "easeOut" },
      }}
    >
      <div className="mx-auto w-full max-w-full sm:max-w-8/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <div className="flex flex-col justify-center py-4">
              <h2 className={styles.title}>
                {title.line1}
                <br />
                {title.line2}
              </h2>
              <p className={styles.description}>{description}</p>
            </div>
          </div>

          {cards.map((card) => (
            <div key={card.title} className="lg:col-span-1">
              <StoryCard card={card} large />
            </div>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
};

export default Stories;
