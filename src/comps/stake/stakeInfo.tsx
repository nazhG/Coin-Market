import styles from "@/styles/Home.module.css";

function StakeInfo({
  days,
  minAmount,
  ROI,
  color
}: {
  days: number;
  minAmount: number;
  ROI: number;
  color: string;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} flex center column`}>
        <h1 className="text-center text-large">STAKING<br/> for: {days} days</h1>
        <div className={`${styles.content} text-large`}
        style={{
          width: "100%",
          textAlign: "center",
          borderBottom: `0.75rem solid ${color}`}}
        >
            ROI Daily {ROI}%
        </div>
        <div className={`${styles.content} text-medium`}>
            Stake from ${minAmount}
        </div>
      </div>
    </div>
  );
}

export default StakeInfo;
