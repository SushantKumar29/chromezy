"use client";

import { motion } from "framer-motion";
import { PreloaderProps } from "@/app/types";

/*
  THis is a Preloader component that is used to show a loading screen while the page sections are loading.
*/

const Preloader = ({ sections }: PreloaderProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 2 }} // duration: 0.5 (controls how long the animation takes to complete) | delay: 2 (constols how long to wait before starting the animation)
        className="fixed inset-0 z-100 flex items-center justify-center bg-background pointer-events-none"
      >
        <div className="text-center">
          <div className="relative mx-auto h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-t-(--text-primary) animate-spin" />
          </div>

          <p className="mt-4 text-(--text-tertiary) animate-pulse">Loading...</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.2 }}
        className="relative"
      >
        {sections.map((section, index) => (
          <div key={index}>{section}</div>
        ))}
      </motion.div>
    </>
  );
};

export default Preloader;
