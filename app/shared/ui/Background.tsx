"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "@/app/styles/sections/Background.module.css";
import { IMAGE_BASE } from "@/app/mock/constants/urls";

const Background = () => {
  const { scrollY } = useScroll();

  const triangleX = useTransform(scrollY, [0, 3000], [-300, -150]);
  const triangleScale = useTransform(scrollY, [0, 3000], [1, 0.75]);
  const triangleY = useTransform(scrollY, [0, 3000], [0, -100]);

  const ballY = useTransform(scrollY, [0, 1200], [0, 50]);
  const ballX = useTransform(scrollY, [0, 1200], [0, -400]);
  const ballOpacity = useTransform(scrollY, [0, 600, 1000], [1, 1, 1]);
  const ballScale = useTransform(scrollY, [0, 1200], [1, 1.4]);

  const midBallY = useTransform(scrollY, [400, 1400], [200, -200]);
  const midBallOpacity = useTransform(scrollY, [300, 700, 1500], [0, 0.35, 0]);

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
            sizes="669px"
            className={styles.triangleImage}
          />
        </div>
      </motion.div>

      <motion.div
        style={{ y: ballY, x: ballX, scale: ballScale, opacity: ballOpacity }}
        className={styles.ballWrapper}
      >
        <div className={styles.ballInner}>
          <Image
            src={`${IMAGE_BASE}/main-ball.png`}
            alt="Main Ball"
            fill
            sizes="(max-width: 768px) 180px, (max-width: 1200px) 22vw, 340px"
            priority
            className={styles.ballImage}
          />
        </div>
      </motion.div>

      <motion.div
        style={{ y: midBallY, opacity: midBallOpacity }}
        className={styles.midBallWrapper}
      >
        <div className={styles.midBallInner}>
          <Image
            src={`${IMAGE_BASE}/main-ball.png`}
            alt="Main-Ball"
            fill
            sizes="(max-width: 768px) 260px, (max-width: 1200px) 35vw, 520px"
            className={styles.midBallImage}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Background;
