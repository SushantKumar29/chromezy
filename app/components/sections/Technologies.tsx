"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TECHNOLOGIES_CONTENT } from "@/app/mock/constants/technologies";
import TechTag from "@/app/components/cards/TechTag";
import styles from "@/app/styles/sections/Technologies.module.css";

const Technologies = () => {
  const { title, description, categories, images } = TECHNOLOGIES_CONTENT;

  return (
    <motion.section
      id="technologies"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${styles.section}`}
    >
      <div className={styles.bgBall}>
        <div className="relative w-full h-full">
          <Image
            src={images.strippedBall}
            alt=""
            height={800}
            width={400}
            className={`${styles.bgBallImage}`}
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-full sm:max-w-8/10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-8 md:gap-12 lg:gap-30 items-center justify-between">
          <div className={styles.leftCard}>
            <h2 className={styles.leftCardTitle}>
              {title.line1}
              <br />
              {title.line2}
              <br />
              {title.line3}
              <br />
              {title.line4}
            </h2>

            <p className={styles.leftCardDescription}>{description}</p>

            <div className={styles.leftCardImage}>
              <Image
                src={images.threeDRender}
                alt="3D render"
                width={1024}
                height={600}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className={styles.rightSection}>
            {categories.map((cat, i) => (
              <motion.div
                key={cat.n}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.07,
                  ease: "easeOut",
                }}
                className={styles.categoryItem}
              >
                <span className={styles.categoryNumber}>{cat.n}</span>

                <div className="flex-1 min-w-0">
                  <h3 className={styles.categoryTitle}>{cat.title}</h3>
                  <div className={styles.tagsContainer}>
                    {cat.tags.map((tag) => (
                      <TechTag key={tag.label} {...tag} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Technologies;
