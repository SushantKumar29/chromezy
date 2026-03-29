"use client";

import Image from "next/image";
import { IMAGE_BASE, ROUTES } from "@/app/mock/constants";
import { PRODUCTS_CONTENT } from "@/app/mock/constants";
import ProductCard from "../cards/ProductCard";
import styles from "@/app/styles/sections/Products.module.css";
import { ProductCardProps } from "@/app/types";
import MotionWrapper from "../wrappers/MotionWrapper";

const Products = () => {
  const { title, description, badgeText, ctaIcon, cards } = PRODUCTS_CONTENT;

  return (
    <MotionWrapper
      as="section"
      id={ROUTES.products}
      className={`relative px-4 py-12 md:py-20 ${styles.section}`}
      motionProps={{
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.9 },
      }}
    >
      <div className={styles.bgBall}>
        <div className="relative w-full h-full">
          <Image
            src={`${IMAGE_BASE}/main-ball.png`}
            alt="Main-Ball"
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 40vw, 620px"
            className={styles.bgBallImage}
          />
        </div>
      </div>

      <div className="mx-auto max-w-full sm:max-w-8/10">
        <div className="max-w-155">
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <div className="mx-auto w-full xl:w-8/10 mt-16 overflow-x-auto pb-6 hide-scrollbar">
        <div className="flex gap-4">
          {cards.map((card) => (
            <div key={card.id} className="flex-1 min-w-70">
              <ProductCard
                {...(card as ProductCardProps)}
                badgeText={badgeText}
                ctaIcon={ctaIcon}
              />
            </div>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
};

export default Products;
