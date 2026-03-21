import { BRAND_LOGOS } from "@/app/mock/constants";
import Image from "next/image";
import styles from "@/app/styles/sections/BrandStrip.module.css";

const BrandStrip = () => {
  return (
    <section id="home" className="w-full px-4 py-11 my-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className={styles.divider} />
        <div
          className={`
            flex md:justify-between items-center gap-8 md:gap-4.5 
            py-16 overflow-x-auto md:overflow-visible
            ${styles.scrollContainer}
          `}
        >
          {BRAND_LOGOS.map((src, i) => (
            <div key={src} className={styles.imageContainer}>
              <Image
                src={src}
                alt={`Client logo ${i + 1}`}
                width={0}
                height={0}
                className={styles.image}
              />
            </div>
          ))}
        </div>

        <div className={styles.divider} />
      </div>
    </section>
  );
};

export default BrandStrip;
