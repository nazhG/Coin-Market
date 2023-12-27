import Image from "next/image";
import React from "react";

import panelStyle from "@/styles/Panel2.module.css";

const Panel2 = () => {
  const check = (
    <Image
      src="/Mas_Informacion.png"
      alt="Check"
      className="ml-2 h-fit"
      height="40"
      width="40"
    />
  );

  return (
    <section
      className={`${panelStyle.layout} grid grid-cols-2 bg-panel2 py-8 px-12`}
    >
      <h1
        className={`${panelStyle.titulo} col-span-2 justify-self-center text-3xl font-extrabold`}
      >
        Market de Theter USDT
      </h1>
      <div
        className={`${panelStyle.video} flex items-center text-center bg-gray-500 rounded-2xl h-3/4`}
      >
        Pendiente caratula para el video que explica como comprar o vender
        criptomonedas en CoinMarket
      </div>
      <div className={`${panelStyle.info} grid grid-cols-2 gap-2`}>
        <p className="flex">
          Popularidad
          {check}
        </p>
        <p className="flex">
          Cap. del mencado
          {check}
        </p>
        <p className="font-bold text-3xl">#3</p>
        <p className="font-bold text-3xl">USDT $1</p>
        <p className="flex">
          Volumen
          {check}
        </p>
        <p className="flex">
          Suministro del circulacion
          {check}
        </p>
        <p className="font-bold text-3xl">USDT $1.000</p>
        <p className="font-bold text-3xl">83.09 B. USDT</p>
      </div>
      <div className={`${panelStyle.parafo} text-[1.2rem]`}>
        <p className="mb-3">
          Tether USDT al ser una criptomoneda estable y respaldada en Dólares,
          es una buena opción para aquellos inversores que desean participar en
          el mercado cripto sin exponerse a un alto riesgo o volatilidad. Además
          Tether USDT es la tercera criptomoneda más líquida del mercado, lo que
          facilita comprarla y venderla.
        </p>
        <p>
          Tether USDT esta regulado por la Autoridad de Servicios Financieros
          del Estado de Nueva York (NYDFS) y la FED (Reserva Federal EE. UU), lo
          que brinda a los inversores cierta tranquilidad de que el activo está
          comprometido con la transparencia y la seguridad.
        </p>
      </div>
    </section>
  );
};

export default Panel2;
