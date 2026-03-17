// app/components/Products.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGE_BASE } from "@/app/mock/constants/urls";
import { PRODUCTS_CONTENT } from "@/app/mock/constants/products";
import ProductCard from "../cards/ProductCard";
import styles from "@/app/styles/sections/Products.module.css";
import { ServiceCardProps } from "@/app/types/products";

const Products = () => {
  const { title, description, cards } = PRODUCTS_CONTENT;

  return (
    <motion.section
      id="products"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
      className={`relative px-4 py-12 md:py-20 ${styles.section}`}
    >
      {/* Background Ball */}
      <motion.div className={styles.bgBall}>
        <div className="relative w-full h-full">
          <Image
            src={`${IMAGE_BASE}/main-ball.png`}
            alt="Main-Ball"
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 40vw, 620px"
            className={styles.bgBallImage}
          />
        </div>
      </motion.div>

      <div className="mx-auto max-w-full sm:max-w-8/10">
        <div className="max-w-155">
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <ProductCard
              key={card.title}
              title={card.title}
              description={card.description}
              cta={card.cta}
              tone={card.tone as ServiceCardProps["tone"]}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Products;
