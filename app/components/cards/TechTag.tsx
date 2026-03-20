import Image from "next/image";
import styles from "@/app/styles/sections/Technologies.module.css";
import { Tag } from "@/app/types";

const TechTag = ({ label, icon }: Tag) => {
  return (
    <span className={styles.tag}>
      {icon && (
        <span className={styles.tagIcon}>
          <Image src={icon} alt={label} width={16} height={16} />
        </span>
      )}
      <span className={styles.tagLabel}>{label}</span>
    </span>
  );
};

export default TechTag;
