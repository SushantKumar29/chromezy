"use client";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "@/app/styles/sections/Background.module.css";
import { IMAGE_BASE } from "@/app/mock/constants";
import MotionWrapper from "@/app/components/wrappers/MotionWrapper";

/* 
  This is the background component which is used in the Home page
  Here some animated background images are rendered
*/

const Background = () => {
  const { scrollY } = useScroll(); // This hook is used to get/set the scroll position

  // Here we are using framer-motion hooks to animate the background images
  const triangleX = useTransform(scrollY, [0, 3000], [-300, -150]);
  const triangleScale = useTransform(scrollY, [0, 3000], [1, 0.75]);
  const triangleY = useTransform(scrollY, [0, 3000], [0, -100]);

  const ballY = useTransform(scrollY, [0, 1200], [0, 50]);
  const ballX = useTransform(scrollY, [0, 1200], [0, -400]);
  const ballScale = useTransform(scrollY, [0, 1200], [1, 1.4]);
  const ballOpacity = useTransform(scrollY, [0, 1000, 2000], [1, 0.8, 0.5]);
  const ballBlur = useTransform(scrollY, [0, 1000, 2000], ["blur(0px)", "blur(0px)", "blur(8px)"]);

  const strippedBallY = useTransform(
    scrollY,
    [3000, 3500, 4000, 4500, 4800],
    [1000, 500, 1500, 1800, 1300]
  );
  const strippedBallX = useTransform(
    scrollY,
    [0, 3000, 4000, 4500, 5000],
    [-6000, 400, 300, -400, -1000]
  );
  const strippedBallScale = useTransform(scrollY, [3500, 5000], [1.5, 2]);
  const strippedBallOpacity = useTransform(scrollY, [0, 3500], [0, 1]);
  const strippedBallRotate = useTransform(scrollY, [3500, 5000], [0, 100]);

  return (
    <div className={styles.container}>
      <div
        className={styles.patternBackground}
        style={{ backgroundImage: `url(${IMAGE_BASE}/hero/bg-gradient.svg)` }}
      />

      <MotionWrapper
        style={{ x: triangleX, y: triangleY, scale: triangleScale }}
        className={styles.triangleWrapper}
      >
        <div className={styles.triangleInner}>
          <Image
            src={`${IMAGE_BASE}/triangle.png`}
            alt="Triangle"
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 40vw, 620px"
            quality={75} // This option optimize quality vs file size
            className={styles.triangleImage}
            loading="eager" // This option explicitly set eager loading
            fetchPriority="high" // THis option explicitly set high fetch priority
          />
        </div>
      </MotionWrapper>

      <MotionWrapper
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
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 40vw, 620px"
            quality={75} // This option optimize quality vs file size
            className={styles.ballImage}
            loading="eager" // This option explicitly set eager loading
            fetchPriority="auto" // This option set lower priority than triangle
          />
        </div>
      </MotionWrapper>

      <MotionWrapper
        style={{
          x: strippedBallX,
          y: strippedBallY,
          scale: strippedBallScale,
          opacity: strippedBallOpacity,
          rotate: strippedBallRotate,
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src={`${IMAGE_BASE}/technologies/stripped-ball.svg`}
            alt="Stripped Ball"
            height={800}
            width={400}
            className={`${styles.bgBallImage}`}
          />
        </div>
      </MotionWrapper>
    </div>
  );
};

export default Background;
