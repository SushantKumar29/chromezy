import { BRAND_LOGOS, ROUTES } from "@/app/mock/constants";
import Image from "next/image";
import styles from "@/app/styles/sections/BrandStrip.module.css";

const BrandStrip = () => {
  return (
    <section id={ROUTES.brands} className="w-full px-4 py-11 my-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={styles.divider} />
        <div className="flex md:justify-between items-center gap-8 md:gap-[18px] py-16 overflow-x-auto hide-scrollbar">
          {BRAND_LOGOS.map((src, i) => (
            <div key={src} className={styles.imageContainer}>
              <Image
                src={src}
                alt={`Client logo ${i + 1}`}
                width={200}
                height={200}
                className="object-contain"
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
