import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import exchangeStyles from '@/styles/Exchange.module.css';

import Graph from '../graph';
import { Exchange } from './exchange';
import { GlobalContext } from '@/context';

const graphConfig = (name: string) => {
  return {
    url: 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js',
    config: {
      symbol: name,
      width: '220',
      height: 220,
      locale: 'es',
      dateRange: '3M',
      colorTheme: 'dark',
      isTransparent: true,
      autosize: false,
      largeChartUrl: '',
      noTimeScale: true,
      chartOnly: false
    } as Object,
    className: '!w-full max-h-36'
  };
};

const ExchangePanel = () => {
  const { IluminacionOn } = useContext(GlobalContext);

  return (
    <section
      className={`${exchangeStyles.layout} bg-dark-grey p-8`}
      id="exchange"
    >
      <div className={`${exchangeStyles.redes} flex`}>
        <Image
          src="/ICON_INSTAGRAM_OK.png"
          alt="Instagram"
          className="mr-2 cursor-pointer"
          height="32"
          width="32"
          onClick={() => window.open('https://instagram.com/coinmarketglo?igshid=NGVhN2U2NjQ0Yg==', '_blank')}
          />
        <Image
          src="/ICON_TELEGRAM_OK.png"
          alt="Telegram"
          className="mr-2 cursor-pointer"
          height="32"
          width="32"
          onClick={() => window.open('https://t.me/CoinMarketComunidad', '_blank')}
          />
        <Image
          src="/ICON_WHATSAPP_OK.png"
          alt="Whatsapp"
          className="mr-2 cursor-pointer"
          height="32"
          width="32"
          onClick={() => window.open('https://wa.me/message/UM2QYXKJLYKOB1', '_blank')}
          />
        <Image
          src="/ICON_YOUTUBE_OK.png"
          alt="Youtube"
          className="mr-2 cursor-pointer"
          height="32"
          width="32"
          onClick={() => window.open('https://www.youtube.com/@CoinMarket_', '_blank')}
        />
      </div>
      <div className={`${exchangeStyles.titulo} self-end`}>
        <h1 className={'text-[2.6rem] font-extrabold'}>
          Compra o intercambia tus Criptomonedas
        </h1>
        <h2 className={'text-3xl font-medium'}>
          por dinero fiduciario en tu moneda local. ¡Lo hacemos sencillo!
        </h2>
      </div>
      <div className={`${exchangeStyles.lista} mt-8 self-start relative`}>
        <p className="flex z-10">
          <Image
            src="/CHULO_READY_FONDO_TRANS.png"
            alt="Check"
            className="mr-2 h-full"
            height="48"
            width="48"
          />
          <span className="z-10 self-center">Metodos de pago seguros</span>
        </p>
        <p className="flex z-10">
          <Image
            src="/CHULO_READY_FONDO_TRANS.png"
            alt="Check"
            className="mr-2 h-full"
            height="48"
            width="48"
          />
          <span className="z-10 self-center">Acreditacion eficaz</span>
        </p>
        <p className="flex z-10">
          <Image
            src="/CHULO_READY_FONDO_TRANS.png"
            alt="Check"
            className="mr-2 h-full"
            height="48"
            width="48"
          />
          <span className="z-10 self-center">Soporte y asistencia</span>
        </p>
        <Image
          src="/Candado_trnasparente_ok.png"
          alt="lock"
          width="0"
          height="0"
          sizes="100vw"
          className="w-28 h-auto absolute z-0 right-0 top-[10%] opacity-75"
        />
      </div>
      <div
        className={`${
          exchangeStyles.exchange
        } h-[95%] py-8 px-4 mx-8 bg-gray-800 rounded-3xl ease-in-out duration-300 self-center 3xl:w-4/5 ${
          IluminacionOn ? 'iluminado' : ''
        }`}
      >
        <Exchange />
      </div>
      <div
        className={`${exchangeStyles.grafico} flex flex-col justify-end relative h-[110%]`}
      >
        <div className="absolute iframe-overlay"></div>
        <div className="grid grid-cols-2 w-full self-center h-full">
          <div className="p-1 bg-gradient-green-45 !w-full relative overflow-hidden">
            <Image
              src="/ISOTIPO_PARA_FONDO_OSCURO.png"
              alt="Coin logo"
              width="32"
              height="32"
              className="absolute top-2 right-2"
            />
            <Graph {...graphConfig('BINANCE:BTCUSDT')} />
          </div>
          <div className="p-1 bg-gradient-green-45 !w-full relative overflow-hidden">
            <Image
              src="/ISOTIPO_PARA_FONDO_OSCURO.png"
              alt="Coin logo"
              width="32"
              height="32"
              className="absolute top-2 right-2"
            />
            <Graph {...graphConfig('BINANCE:BNBUSDT')} />
          </div>
          <div className="p-1 bg-gradient-green-45 !w-full relative overflow-hidden">
            <Image
              src="/ISOTIPO_PARA_FONDO_OSCURO.png"
              alt="Coin logo"
              width="32"
              height="32"
              className="absolute top-2 right-2"
            />
            <Graph {...graphConfig('BINANCE:ETHUSDT')} />
          </div>
          <div className="p-1 bg-gradient-green-45 !w-full relative overflow-hidden">
            <Image
              src="/ISOTIPO_PARA_FONDO_OSCURO.png"
              alt="Coin logo"
              width="32"
              height="32"
              className="absolute top-2 right-2"
            />
            <Graph {...graphConfig('BINANCE:XRPUSDT')} />
          </div>
        </div>
      </div>
      <div
        className={`${exchangeStyles.imagen} flex flex-col w-full h-full justify-end items-center`}
      >
        <Image
          src="/exchnage.png"
          alt="Exchange"
          width="0"
          height="0"
          sizes="100vw"
          className={`h-[60%]  w-auto max-h-[60%] max-w-[80%]`}
        />
      </div>
      <p
        className={`${exchangeStyles.subtitulo} yellow text-xl font-semibold text-center self-start`}
      >
        EXCHANGE
      </p>
    </section>
  );
};

export default ExchangePanel;
