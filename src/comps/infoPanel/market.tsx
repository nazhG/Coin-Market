import React, { useContext, useState } from "react";
import Image from "next/image";

import Input from "@/comps/exchange/input";

import style from "@/styles/MarketInfo.module.css";
import Graph from "../exchange/graph";
import { GlobalContext } from "@/context";

const MarketInfo = () => {
  const [compra, setCompra] = useState(true);

  const { IluminacionOn } = useContext(GlobalContext);

  const selected = "border-double border-b-4 border-cyan-700";
  const unselected = "border-solid border-b-4 border-gray-700";
  return (
    <section className={`${style.layout} bg-dark-grey`} id="exchange">
      <div className={`${style.header} flex`}>
        <Image
          src="/ICON_INSTAGRAM_OK.png"
          alt="Instagram"
          className="mr-2"
          height="32"
          width="32"
        />
        <Image
          src="/ICON_TELEGRAM_OK.png"
          alt="Telegram"
          className="mr-2"
          height="32"
          width="32"
        />
        <Image
          src="/ICON_WHATSAPP_OK.png"
          alt="Whatsapp"
          className="mr-2"
          height="32"
          width="32"
        />
        <Image
          src="/ICON_YOUTUBE_OK.png"
          alt="Youtube"
          className="mr-2"
          height="32"
          width="32"
        />
      </div>
      <div className="mt-10-vh">
        <h1 className={"text-4xl font-extrabold"}>
          Compra o intercambia tus Criptomonedas
        </h1>
        <h2 className={"text-4xl font-medium"}>
          por dinero fiduciario en tu moneda local. ¡Lo hacemos sencillo!
        </h2>
        <p className="flex mt-8 z-10">
          <Image
            src="/CHULO_READY_FONDO_TRANS.png"
            alt="Check"
            className="mr-2 h-full"
            height="32"
            width="32"
          />
          <span className="z-10">Metodos de pago seguros</span>
        </p>
        <p className="flex relative z-10">
          <Image
            src="/CHULO_READY_FONDO_TRANS.png"
            alt="Check"
            className="mr-2 h-full"
            height="32"
            width="32"
          />
          <span className="z-10">Acreditacion eficaz</span>
          <Image
            src="/Candado_trnasparente_ok.png"
            alt="lock"
            width="0"
            height="0"
            sizes="100vw"
            className="w-20 h-auto absolute z-0 right-16 top-[-2rem]"
          />
        </p>
        <p className="flex">
          <Image
            src="/CHULO_READY_FONDO_TRANS.png"
            alt="Check"
            className="mr-2 h-full"
            height="32"
            width="32"
          />
          <span className="z-10">Soporte y asistencia</span>
        </p>
      </div>
      <div
        className={`h-fit py-10 px-8 bg-gray-800 rounded-3xl ease-in-out duration-300 ${
          IluminacionOn ? "iluminado" : ""
        }`}
        onClick={() => {
          document.getElementById("token1Input")?.focus();
        }}
      >
        <form action="" className={`h-auto text-center`}>
          <div className="flex justify-around my-6">
            <div
              className={`cursor-pointer w-1/2 transicion ${
                compra ? selected : unselected
              }`}
              onClick={() => setCompra(true)}
            >
              Compra
            </div>
            <div
              className={`cursor-pointer w-1/2 transicion ${
                compra ? unselected : selected
              }`}
              onClick={() => setCompra(false)}
            >
              Venta
            </div>
          </div>
          <Input label="Cantidad" name="token1" />
          <Input label="Recibir" name="token2" />
          <button
            className="mt-12 yellow bg-blue w-full rounded py-1"
            type="submit"
          >
            COMPRA
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-between px-8">
        <div className="grid grid-cols-2 h-1/2">
          <Graph name="BINANCE:BTCUSDT" id="btc" />
          <Graph name="BINANCE:BNBUSDT" id="bnb" />
          <Graph name="BINANCE:ETHUSDT" id="eth" />
          <Graph name="BINANCE:XRPUSDT" id="xrp" />
        </div>
        <Image
          src="/exchnage.png"
          alt="Exchange"
          width="0"
          height="0"
          sizes="100vw"
          className="self-center w-1/2 h-auto"
        />
      </div>
      <div className={`${style.footer} flex justify-self-center`}>
        {/* <p className="yellow self-center">EXCHANGE</p> */}
      </div>
    </section>
  );
};

export default MarketInfo;
