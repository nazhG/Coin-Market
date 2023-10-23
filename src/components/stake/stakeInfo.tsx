import styles from "@/styles/Home.module.css";

function StakeInfo({
  days,
  minAmount,
  ROI,
}: {
  days: number;
  minAmount: number;
  ROI: number;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Staking for: {days} days</h1>
        <div className={styles.content}>
            ROI Daily {ROI}%
        </div>
      </div>
      <div className={styles.footer}>
            Min. Amount: {minAmount} USDT
      </div>
    </div>
  );
}

export default StakeInfo;
