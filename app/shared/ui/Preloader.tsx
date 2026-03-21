"use client";

import { PreloaderProps } from "@/app/types";
import MotionWrapper from "@/app/components/wrappers/MotionWrapper";

/*
  THis is a Preloader component that is used to show a loading screen while the page sections are loading.
*/

const Preloader = ({ sections }: PreloaderProps) => {
  return (
    <>
      <MotionWrapper
        motionProps={{
          initial: { opacity: 1 },
          animate: { opacity: 0 },
          transition: { duration: 0.5, delay: 2 }, // duration: 0.5 (controls how long the animation takes to complete) | delay: 2 (constols how long to wait before starting the animation
        }}
        className="fixed inset-0 z-100 flex items-center justify-center bg-background pointer-events-none"
      >
        <div className="text-center">
          <div className="relative mx-auto h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-t-(--text-primary) animate-spin" />
          </div>

          <p className="mt-4 text-(--text-tertiary) animate-pulse">Loading...</p>
        </div>
      </MotionWrapper>

      <MotionWrapper
        className="relative"
        motionProps={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5, delay: 2.2 },
        }}
      >
        {sections.map((section, index) => (
          <div key={index}>{section}</div>
        ))}
      </MotionWrapper>
    </>
  );
};

export default Preloader;
