"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "@/app/styles/sections/Background.module.css";
import { IMAGE_BASE } from "@/app/mock/constants";

const Background = () => {
  const { scrollY } = useScroll();

  const triangleX = useTransform(scrollY, [0, 3000], [-300, -150]);
  const triangleScale = useTransform(scrollY, [0, 3000], [1, 0.75]);
  const triangleY = useTransform(scrollY, [0, 3000], [0, -100]);

  const ballY = useTransform(scrollY, [0, 1200], [0, 50]);
  const ballX = useTransform(scrollY, [0, 1200], [0, -400]);
  const ballScale = useTransform(scrollY, [0, 1200], [1, 1.4]);
  const ballOpacity = useTransform(scrollY, [0, 600, 1000, 2000], [1, 1, 0.8, 0.5]);

  const ballBlur = useTransform(
    scrollY,
    [0, 600, 1000, 2000],
    ["blur(0px)", "blur(0px)", "blur(0px)", "blur(8px)"]
  );

  return (
    <div className={styles.container}>
      <div
        className={styles.patternBackground}
        style={{
          backgroundImage: `url(${IMAGE_BASE}/hero/bg-gradient.svg)`,
        }}
      />

      <motion.div
        style={{ x: triangleX, y: triangleY, scale: triangleScale }}
        className={styles.triangleWrapper}
      >
        <div className={styles.triangleInner}>
          <Image
            src={`${IMAGE_BASE}/triangle.png`}
            alt="Triangle"
            fill
            quality={75} // This option optimize quality vs file size
            className={styles.triangleImage}
            loading="eager" // This option explicitly set eager loading
            fetchPriority="high" // THis option explicitly set high fetch priority
          />
        </div>
      </motion.div>

      <motion.div
        style={{
          y: ballY,
          x: ballX,
          scale: ballScale,
          opacity: ballOpacity,
          filter: ballBlur,
        }}
        className={styles.ballWrapper}
      >
        <div className={styles.ballInner}>
          <Image
            src={`${IMAGE_BASE}/main-ball.png`}
            alt="Main Ball"
            fill
            className={styles.ballImage}
            loading="eager" // This option explicitly set eager loading
            fetchPriority="auto" // This option set lower priority than triangle
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Background;
