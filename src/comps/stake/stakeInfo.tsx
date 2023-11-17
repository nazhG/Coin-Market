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
      <div className={`pt-8 pb-1 flex flex-col`}>
        <h1 className="text-center text-xl">STAKING<br/> For {days} days</h1>
        <div className={`${styles.content} text-2xl font-bold`}
        style={{
          width: "100%",
          textAlign: "center",
          borderBottom: `0.75rem solid ${color}`}}
        >
            ROI Daily {ROI}%
        </div>
        <div className={`${styles.content} text-center text-base font-semibold`}>
            Stake from ${minAmount}
        </div>
      </div>
    </div>
  );
}

export default StakeInfo;
