import Image from 'next/image';
import React, { memo } from 'react';
import { btnAnimation } from '../utils/btnAnimation';

const Panel7 = () => {
  return (
    <section className="bg-dark-grey overflow-hidden p-8 pt-0 items-center flex flex-col justify-around h-[50vh]">
      <div className="flex items-center justify-between w-full">
        <span
          className={`bg-cyan-950 rounded-md text-base text-center p-2 px-3 cursor-pointer font-semibold ${btnAnimation}`}
          onClick={() => {
            window.open('./referidos', '_blank');
          }}
        >
          ERES EMPRENDEDOR DIGITAL - TRABAJA CON NOSOTROS
        </span>
        <div className="flex gap-2">
          <Image
            src="/ICON_INSTAGRAM_OK.png"
            alt="Instagram"
            className={`mr-2 cursor-pointer ${btnAnimation}`}
            height="42"
            width="42"
            onClick={() =>
              window.open(
                'https://instagram.com/coinmarketglo?igshid=NGVhN2U2NjQ42Yg==',
                '_blank'
              )
            }
          />
          <Image
            src="/ICON_TELEGRAM_OK.png"
            alt="Telegram"
            className={`mr-2 cursor-pointer ${btnAnimation}`}
            height="42"
            width="42"
            onClick={() =>
              window.open('https://t.me/CoinMarketComunidad', '_blank')
            }
          />
          <Image
            src="/ICON_WHATSAPP_OK.png"
            alt="Whatsapp"
            className={`mr-2 cursor-pointer ${btnAnimation}`}
            height="42"
            width="42"
            onClick={() =>
              window.open('https://wa.me/message/UM2QYXKJLYKOB1', '_blank')
            }
          />
          <Image
            src="/ICON_YOUTUBE_OK.png"
            alt="Youtube"
            className={`mr-2 cursor-pointer ${btnAnimation}`}
            height="42"
            width="42"
            onClick={() =>
              window.open('https://www.youtube.com/@CoinMarket_', '_blank')
            }
          />
        </div>
        <div className="flex gap-4 text-md">
          <span
            className={`cursor-pointer ${btnAnimation}`}
            onClick={() =>
              window.open('./conditiones-coin-market.pdf', '_blank')
            }
          >
            | Terms & Conditions |
          </span>
          <span
            className={`cursor-pointer ${btnAnimation}`}
            onClick={() =>
              window.open(
                './user-security-&-esponsibility-coin-market.pdf',
                '_blank'
              )
            }
          >
            | Security policy |
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between w-full flex-wrap">
        <div className="w-1/2 flex flex-wrap gap-4 items-center">
          <Image
            src="/trust_wallet_icon.png"
            alt="Trust wallet"
            className={`w-[23%]  h-[90%] py-7`}
            height="180"
            width="360"
          />
          <Image
            src="/elpropiosafepalll.png"
            alt="Safe pal"
            className={`w-[23%]  h-[90%] py-7`}
            height="180"
            width="360"
          />
          <Image
            src="/metamask_icon.png"
            alt="Metamask"
            className={`w-[23%] h-[90%] py-7`}
            height="180"
            width="360"
          />
          <Image
            src="/bnb_icon.png"
            alt="Metamask"
            className={`w-[10%] h-[70%] py-2`}
            height="180"
            width="180"
          />
          <Image
            src="/Binance_Smart_Chain_Bep20.png"
            alt="Binace Smart Chain"
            className={`w-[45%] h-auto`}
            height="240"
            width="240"
          />
          <Image
            src="/TRC20_TRON.png"
            alt="TRC20 TRON"
            className={`w-[45%] h-auto`}
            height="240"
            width="240"
          />
        </div>
        <div className="w-1/2 flex items-center justify-center gap-6">
          <Image
            src="/ISOTIPO_PARA_FONDO_OSCURO.png"
            alt="Coin logo"
            className={`w-[5rem] h-auto`}
            height="120"
            width="120"
          />
          <span className="text-md">all right &copy; - coinmarketglo.com</span>
        </div>
      </div>
    </section>
  );
};

export default memo(Panel7);
