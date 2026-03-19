"use client";

import Image from "next/image";
import { CONTACT_CONTENT } from "@/app/mock/constants";
import ContactForm from "@/app/components/forms/ContactForm";
import styles from "@/app/styles/sections/Contact.module.css";
import MotionWrapper from "../wrappers/MotionWrapper";

const ContactUs = () => {
  const { title, description, contactInfo, images } = CONTACT_CONTENT;

  return (
    <MotionWrapper
      as="section"
      id="contact"
      className="w-full px-4 py-12 md:py-20"
      motionProps={{
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.8, ease: "easeOut" },
      }}
    >
      <div className="mx-auto w-full max-w-full sm:max-w-8/10">
        <div className={styles.contactContainer}>
          <div className={styles.leftBackground}>
            <div
              className={styles.backgroundImage}
              style={{ backgroundImage: `url(${images.background})` }}
            />
            <div className={styles.backgroundOverlay} />
          </div>

          <div className={styles.leftContent}>
            <div className={styles.logoContainer}>
              <Image
                src={images.logo}
                alt="Contact character"
                fill
                sizes="280px"
                className="object-contain object-bottom"
              />
            </div>

            <div className="text-center mb-6">
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.infoContainer}>
              <div className={`${styles.infoBox} ${styles.infoBoxTop}`}>
                <div className={styles.infoLeft}>
                  <Image src={images.phoneIcon} alt="Phone Icon" width={20} height={20} />
                  <span className={styles.infoLabel}>Phone</span>
                </div>
                <span className={styles.infoValue}>{contactInfo.phone}</span>
              </div>

              <div className={`${styles.infoBox} ${styles.infoBoxBottom}`}>
                <div className={styles.infoLeft}>
                  <Image src={images.emailIcon} alt="Email Icon" width={20} height={20} />
                  <span className={styles.infoLabel}>Email</span>
                </div>
                <span className={styles.infoValue}>{contactInfo.email}</span>
              </div>
            </div>
          </div>

          <div className={styles.formContainer}>
            <ContactForm showEnvelope />
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default ContactUs;
