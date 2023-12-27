import { useState } from "react";
// Styles
import styles from "@/styles/Home.module.css";
// Components
import StakeInfo from "@/comps/stake/stakeInfo";
import { useAccount } from "wagmi";
import { constants, BigNumber } from "ethers";

import Image from "next/image";
import { Stake } from "./stake";

const StakePanel = () => {
  const check = (
    <Image
      src="/CHULO_READY_FONDO_TRANS.png"
      alt="Check"
      className="mr-2 h-full"
      height="40"
      width="40"
    />
  );

  const { address, isDisconnected } = useAccount();

  return (
    <section id="stake" className="grid grid-cols-5 grid-rows-1 gap-4 bg-stake p-8">
      <div className="text-large bold px-1 my-8 pt-[10%] col-span-2">
        <p>
          Maximiza tus rendimientos con el sistema de Staking. Obtén ganancias
          de los mercados de Divisas y Cripto manteniendo tus fondos con
          seguridad BlockChain.
        </p>
        <br />
        <p className="flex my-3 items-center">
          {check}
          Rendimientos en Dolares
        </p>
        <p className="flex my-3 items-center">
          {check}
          Acreditación afectiva al retirar tus fondos
        </p>
        <p className="flex my-3 items-center">
          {check}
          Soporte y asistencia
        </p>
      </div>
      <div className="col-span-3">
        <Stake />
      </div>
    </section>
  );
};

export default StakePanel;
