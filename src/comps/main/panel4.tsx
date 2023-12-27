import React, { memo } from "react";
import panelStyle from "@/styles/Panel4.module.css";

const Panel4 = () => {
  return (
    <section
      className={`grid grid-cols-2 grid-rows-1 gap-16 bg-panel4 px-8 py-[10%] items-start content-start`}
    >
      <div className={``}>
        <p className={`text-[1.3rem] font-bold mb-12`}>
          La capitalización actual del mercado global de criptomonedas es $1.05
          Trillones de USD y el volumen de negociación en 24 horas es de $31.56
          Billones USD, lo que representa un incremento de 16.70%. Las cripto
          monedas estables como el tether USDt mantienen gran participación en
          el volumen de negociación global. La dominancia actual de Bitcoin se
          mantiene sobre el 49%.
        </p>
        <p className={`font-bold text-[1.3rem]`}>
          Grades instituciones están tomando posiciones dentro del mercado de
          criptomonedas. El próximo halving de Bitcoin, proyecta un 2024 alcista
          para el mercado criptografico. El halving tendrá lugar en abril 2024
          cuando se logre minar el bloque 840.000 de Bitcoin.
        </p>
      </div>
      <div
        className={`flex items-center text-center justify-center bg-gray-500 rounded-2xl h-full`}
      >
        Pendiente caratula para el video que explica como invertir en los
        Staking
      </div>
    </section>
  );
};

export default memo(Panel4);
