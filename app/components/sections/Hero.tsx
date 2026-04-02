"use client";

import Image from "next/image";
import { ICON_BASE, IMAGE_BASE, ROUTES } from "@/app/mock/constants";
import { HERO_CONTENT } from "@/app/mock/constants";
import styles from "@/app/styles/sections/Hero.module.css";
import MotionWrapper from "../wrappers/MotionWrapper";

const Hero = () => {
  const { badge, title, subtitle, description, stats } = HERO_CONTENT;

  return (
    <div id={ROUTES.home} className="relative w-full pt-[174px] pb-0">
      <div className="relative mx-auto w-full">
        <div className="absolute left-[607.12px] top-[50.9px] h-full">
          <Image
            src={`${IMAGE_BASE}/hero/bg-flower.png`}
            alt="Background Flower"
            width={725}
            height={507}
            className={`h-full w-full ${styles.bgFlower}`}
          />
        </div>

        <MotionWrapper
          as="div"
          className="mx-auto max-w-[800px] text-center"
          motionProps={{
            initial: { opacity: 0, y: 18 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full ${styles.badge}`}
          >
            <Image
              src={`${ICON_BASE}/${badge.icon}`}
              alt="Badge"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span className="text-base font-medium text-primary">{badge.text}</span>
          </div>

          <div className="text-[64px] font-semibold text-primary mt-4">
            <span className="block">
              {title.from.prefix} <span className={styles.highlightCyan}>{title.from.text}</span>
            </span>
            <span className="block">
              {title.to.prefix} <span className={styles.highlightBlue}>{title.to.text}</span>
            </span>
          </div>

          <div className={`text-2xl font-normal mt-4 ${styles.subtitle}`}>{subtitle}</div>

          <p className="mx-auto max-w-[760px] text-base mt-16 text-primary">{description}</p>

          <div className="mx-auto mt-24 grid w-full grid-cols-4 gap-[18px]">
            {stats.map((s) => (
              <div
                key={s.id}
                className={`flex flex-col items-center justify-center gap-1.5  px-3 py-3.5 ${styles.statItem}`}
              >
                <div className={`text-[32px] font-semibold leading-none ${styles.statValue}`}>
                  {s.value}
                </div>
                <div className={`text-sm font-medium ${styles.statLabel}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default Hero;
