"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/app/shared/ui/Icons";
import { useRef, useEffect } from "react";
import { CLIENTS_CONTENT } from "@/app/mock/constants";
import ClientCard from "@/app/components/cards/ClientCard";
import styles from "@/app/styles/sections/Clients.module.css";
import { getScrollPosition, scrollCard } from "@/app/utils/cardUtils";

const Clients = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { title, subtitle, clients } = CLIENTS_CONTENT;

  // Find the index of the selected card
  const selectedIndex = clients.findIndex((client) => client.selected);

  // This hook is used to scroll to selected card when the section gets loaded
  useEffect(() => {
    if (selectedIndex === -1) return;

    const scrollPosition = getScrollPosition(scrollRef, selectedIndex); // Here we are getting the position to which we want to scroll to
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" }); // Here we are scrolling to the position smoothly
    }
  }, [selectedIndex]);

  return (
    <motion.section
      id="clients"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
      className={`relative px-4 py-12 md:py-20 ${styles.section}`}
    >
      <div className="mx-auto w-full max-w-full sm:max-w-8/10">
        <div className="flex items-end justify-between mb-10 md:mb-16">
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0 ml-6">
            <button
              id="prevButton"
              aria-label="Previous"
              onClick={() => scrollCard(scrollRef, "left")}
              className={styles.navButton}
              type="button"
            >
              <ArrowRightIcon name="Arrow Left" className="h-5 w-5 rotate-180" />
            </button>
            <button
              id="nextButton"
              aria-label="Next"
              onClick={() => scrollCard(scrollRef, "right")}
              className={styles.navButton}
              type="button"
            >
              <ArrowRightIcon name="Arrow Right" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full xl:w-8/10">
        <div ref={scrollRef} className={styles.scrollContainer}>
          {clients.map((client, idx) => (
            <ClientCard key={idx} client={client} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Clients;
