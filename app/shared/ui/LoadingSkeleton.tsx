import styles from "../../styles/ui/LoadingSkeleton.module.css";

const LoadingSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.title} />
      <div className={styles.subtitle} />
      <div className={styles.content} />
    </div>
  );
};

export default LoadingSkeleton;
