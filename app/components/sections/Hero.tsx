// app/components/Hero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ICON_BASE, IMAGE_BASE } from "@/app/mock/constants/urls";
import { HERO_CONTENT } from "@/app/mock/constants";
import styles from "@/app/styles/sections/Hero.module.css";

const Hero = () => {
  const { badge, title, subtitle, description, stats } = HERO_CONTENT;

  return (
    <div id="home" className="relative w-full pt-43.5 pb-0">
      <div className="relative mx-auto w-full">
        <div className="absolute left-[607.12px] top-[50.9px] h-full">
          <Image
            src={`${IMAGE_BASE}/hero/bg-flower.png`}
            alt=""
            width={725}
            height={507}
            className={`h-full w-full ${styles.bgFlower}`}
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto flex max-w-205 flex-col items-center gap-12 text-center"
        >
          <div
            className={`inline-flex items-center gap-2 rounded-[999px] px-4 py-2.5 ${styles.badge}`}
          >
            <Image
              src={`${ICON_BASE}/${badge.icon}`}
              alt=""
              width={4}
              height={4}
              className="h-4 w-4"
              priority
            />
            <span className="font-['Inter'] text-[16px] font-medium">{badge.text}</span>
          </div>

          <h1 className="text-[64px] font-semibold leading-[1.05] tracking-[-0.02em] text-primary">
            <span className="block">
              {title.from.prefix} <span className={styles.highlightCyan}>{title.from.text}</span>
            </span>
            <span className="block">
              {title.to.prefix} <span className={styles.highlightBlue}>{title.to.text}</span>
            </span>
          </h1>

          <div className={`text-[24px] font-normal leading-[1.35] ${styles.subtitle}`}>
            {subtitle}
          </div>

          <p className="max-w-190 text-[16px] leading-[1.7] text-primary">{description}</p>

          <div className="grid w-full grid-cols-4 gap-4.5">
            {stats.map((s) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center gap-1.5  px-3 py-3.5 ${styles.statItem}`}
              >
                <div className={`text-[32px] font-semibold leading-none ${styles.statValue}`}>
                  {s.value}
                </div>
                <div className={`text-[14px] font-medium ${styles.statLabel}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
