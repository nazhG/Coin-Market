import styles from "@/styles/Home.module.css";

function StakeInfo({
  days,
  minAmount,
  ROI,
  color,
  amount,
  selected,
  stakeAmount,
}: {
  days: number;
  minAmount: number;
  ROI: number;
  color: string;
  amount: string;
  selected: boolean;
  stakeAmount: string;
}) {
  const format = (amountString: string) => {
    const amountInCrypto = Number.parseFloat(amountString) / 10 ** 18;

    return amountInCrypto.toLocaleString("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={`pt-8 pb-1 flex flex-col`}>
        <h1 className="text-center text-xl">
          STAKING
          <br /> For {days} days
        </h1>
        <div
          className={`${styles.content} text-2xl font-bold`}
          style={{
            width: "100%",
            textAlign: "center",
            borderBottom: `0.75rem solid ${color}`,
          }}
        >
          ROI Daily {ROI}%
        </div>
        <div
          className={`${styles.content} text-center text-base font-semibold`}
        >
          Stake from ${minAmount}
        </div>
        {selected && (
          <div className="text-base text-yellow-200 flex flex-col justify-center p-3 mt-4 border-t-2 border-yellow-200 border-dashed">
            <p>Your Invest: {format(stakeAmount)}</p>
            <p>Your Profit: {format(amount)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default StakeInfo;
