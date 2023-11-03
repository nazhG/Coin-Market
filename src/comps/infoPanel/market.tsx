import React from "react";

import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaYoutube,
  FaCheckCircle,
} from "react-icons/fa";

import Input from "@/comps/exchange/input";

import style from "@/styles/MarketInfo.module.css";

const MarketInfo = () => {
  return (
    <section className={style.layout}>
      <div className={style.header}>
        <FaInstagram />
        <FaWhatsapp />
        <FaTelegramPlane />
        <FaYoutube />
      </div>
      <div>
        <h1>Compra o intercambia tus criptomonedas</h1>
        <h2>por dinero fiduciario en tu moneda local. ¡Lo hacemos sencillo!</h2>
        <p>
          <FaCheckCircle className="checkCircle" />
          Metodos de pago seguros
        </p>
        <p>
          <FaCheckCircle className="checkCircle" />
          Acreditacion eficaz
        </p>
        <p>
          <FaCheckCircle className="checkCircle" />
          Soporte y asistencia
        </p>
      </div>
      <div>
        <form action="">
          <div>
            <div>Compra</div>
            <div>Venta</div>
          </div>
          <Input />
          <Input />
          <input type="submit" value="" />
        </form>
      </div>
      <div>
        <div></div>
      </div>
    </section>
  );
};

export default MarketInfo;