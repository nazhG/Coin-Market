import { useState } from "react";
// Styles
import styles from "@/styles/Home.module.css";
// Components
import StakeInfo from "@/comps/stake/stakeInfo";
import { useAccount } from "wagmi";
import { constants, BigNumber } from "ethers";
// Custom Hooks
import {
  useApprove,
  useAllowance,
  useBalance,
  useGetStake,
  useMakeStake,
  useCalcReward,
} from "@/hooks/";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Stake = () => {
  const tokenAddr = "0x03d087cf47ab43f5d85c1400c41aA2CdB5341186";
  const stakeAddr = "0x77131785C9284eE4332243D15b8adAfdb1379d3c";
  const TOKENDECIMALS = 18;

  const parse = (amount: number) =>
    BigNumber.from(amount).mul(BigNumber.from(10).pow(TOKENDECIMALS));

  const [StakeTierSelected, setStakeTierSelected] = useState(0);
  const [amount, setAmount] = useState(50);

  const { address, isDisconnected } = useAccount();

  const stakeTries = [
    {
      days: 120,
      minAmount: 50,
      ROI: 1,
      color: "#0f385a",
    },
    {
      days: 150,
      minAmount: 150,
      ROI: 1.1,
      color: "#feb01c",
    },
    {
      days: 180,
      minAmount: 500,
      ROI: 1.4,
      color: "#11a012",
    },
  ];

  // Get User Token Balance
  const { balance } = useBalance(tokenAddr, address || constants.AddressZero);

  // Get Approval
  // Amount of tokens approved for the contract
  const { allowanceAmount } = useAllowance(
    tokenAddr,
    address || constants.AddressZero,
    stakeAddr
  );

  // Set Approval
  // Ask the user to approve the contract to spend their tokens
  const { approveData, approveLoading, approve, approveError } = useApprove(
    tokenAddr,
    stakeAddr || constants.AddressZero,
    parse(amount)
  );

  // Get Stake
  // Amount of tokens staked
  const { stake: stakeAmount } = useGetStake(
    stakeAddr,
    address || constants.AddressZero
  );

  // Make Stake
  // Ask the user to stake their tokens
  const {
    stakeData,
    stakeLoading,
    stake: makeStake,
    stakeError,
  } = useMakeStake(
    stakeAddr,
    StakeTierSelected,
    BigNumber.from(allowanceAmount ?? 0).gte(amount ?? 0)
      ? parse(amount)
      : BigNumber.from(0),
    constants.AddressZero
  );

  // Get Reward
  const { reward } = useCalcReward(stakeAddr, address || constants.AddressZero);

  const msg = () => {
    let msg = "";

    if (isDisconnected) {
      msg = "Conectata tu billetera!";
    } else if (stakeTries[StakeTierSelected].minAmount > amount) {
      msg =
        "El monto mínimo para staking es de " +
        stakeTries[StakeTierSelected].minAmount;
    } else if (
      allowanceAmount === undefined ||
      BigNumber.from(allowanceAmount).lt(parse(amount))
    ) {
      msg = "Neceistas aprobar los fondos para staking";
    }

    return (
      <div>
        <p>{msg}</p>
        <p>{(approveLoading || stakeLoading) && "Esperando transacción"}</p>
      </div>
    );
  };

  return (
    <section id="stake" className="flex row">
      <div className="col-4 text-large bold px-1 my-8">
        <p>
          Maximiza tus rendimientos con el sistema de Staking. Obtén ganancias
          de los mercados de Divisas y Cripto manteniendo tus fondos con
          seguridad BlockChain.
        </p>
        <br />
        <p className="flex my-3">
          <FaCheckCircle className="checkCircle text-xx-large" />
          Rendimientos en Dolares
        </p>
        <p className="flex my-3">
          <FaCheckCircle className="checkCircle text-xx-large" />
          Acreditación afectiva al retirar tus fondos
        </p>
        <p className="flex my-3">
          <FaCheckCircle className="checkCircle text-xx-large" />
          Soporte y asistencia
        </p>
      </div>
      <div className="col-8">
        <h1 className="flex center text-xx-large">
          <i>STAKING</i>
        </h1>
        <h2 className="flex center text-x-large">
          <i>Profit staking in market</i>
        </h2>
        <div className={styles.main}>
          <div className={styles.stakeWapper}>
            {stakeTries.map((stakeTier, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setStakeTierSelected(i);
                  }}
                  className={`${styles.wrapperParcialWidth} relative ${
                    StakeTierSelected === i ? "elevado" : ""
                  }`}
                >
                  <Image
                    src="/COIN.svg"
                    alt="WalletConnect Logo"
                    height="32"
                    width="203"
                    className="absolute stake-logo"
                  />
                  <StakeInfo
                    days={stakeTier.days}
                    minAmount={stakeTier.minAmount}
                    ROI={stakeTier.ROI}
                    color={stakeTier.color}
                  />
                </div>
              );
            })}
            <button
              className={`${styles.wrapperFullWidth} ${styles.input} text-medium`}
            >
              <span>Ingrese el monto para staking : &nbsp;</span>
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="Ingrese cantidad en USDT a invertir"
                onChange={(e) => setAmount(Number(e.target.value))}
                value={amount}
                className={`${styles.amount} text-medium py-4`}
              />
            </button>
            <button
              className={`${styles.wrapperFullWidth} ${styles.cursorPointer} btn py-4 text-medium`}
              disabled={isDisconnected || stakeLoading || approveLoading}
              onClick={() => {
                if (
                  allowanceAmount === undefined ||
                  BigNumber.from(allowanceAmount).gte(parse(amount))
                ) {
                  if (makeStake !== undefined) {
                    makeStake!();
                  }
                  console.log("makeStake");
                } else {
                  console.log("approve");

                  approve!();
                }
              }}
            >
              INICIAR STAKING
              {isDisconnected && <p>Conectata tu billetera!</p>}
              {stakeError && <p>{msg()}</p>}
            </button>
            <button
              className={`${styles.wrapperParcialWidth} btn py-4 text-medium`}
            >
              REINVEST
            </button>
            <button
              className={`${styles.wrapperParcialWidth} btn py-4 text-medium`}
            >
              WITHDRAW
              {reward != null && <p>reward: {reward.toString()}</p>}
            </button>
            <button
              className={`${styles.wrapperParcialWidth} btn py-4 text-medium`}
            >
              UNSTAKE
            </button>

            <div
              className={`${styles.wrapperFullWidth} ${styles.cursorPointer} btn py-4 text-medium`}
            >
              {stakeAmount !== undefined && stakeAmount !== null
                ? `
                tier: ${stakeAmount.tier}
                Amount Staked: ${stakeAmount.amount.toString()}
                Start on: ${stakeAmount.startTimestamp}
                will Need BidUp: ${stakeAmount.nextBidUp}
                `
                : "no stake"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stake;
