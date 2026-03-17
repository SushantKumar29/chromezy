// app/components/Clients.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/app/shared/ui/Icons";
import { useRef, useEffect } from "react";
import { CLIENTS_CONTENT } from "@/app/mock/constants/clients";
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

    const scrollPosition = getScrollPosition(scrollRef, selectedIndex);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
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
        {/* Header */}
        <div className="flex items-end justify-between mb-10 md:mb-16">
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="hidden md:flex items-center gap-3 shrink-0 ml-6">
            <button
              name="Prev"
              onClick={() => scrollCard(scrollRef, "left")}
              className={styles.navButton}
              type="button"
            >
              <ArrowRightIcon className="h-5 w-5 rotate-180" />
            </button>
            <button
              name="Next"
              onClick={() => scrollCard(scrollRef, "right")}
              className={styles.navButton}
              type="button"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full xl:w-8/10">
        {/* Scrollable Clients */}
        <div ref={scrollRef} className={styles.scrollContainer}>
          {clients.map((client, idx) => (
            <ClientCard key={idx} client={client} />
          ))}
        </div>
        {/* Mobile Dots */}
        <div className={styles.mobileDots}>
          {clients.map((_, i) => (
            <div key={i} className={styles.dot} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Clients;
