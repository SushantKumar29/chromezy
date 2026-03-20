import styles from "@/app/styles/ui/BgOverlay.module.css";

const BgOverlay = () => {
  return (
    <div className={styles.overlayContainer}>
      <div className={styles.topGradient} />
      <div className={styles.leftGradient} />
      <div className={styles.rightGradient} />
      <div className={styles.bottomLeftGradient} />
      <div className={styles.centerGradientOne} />
      <div className={styles.centerGradientTwo} />
    </div>
  );
};

export default BgOverlay;
