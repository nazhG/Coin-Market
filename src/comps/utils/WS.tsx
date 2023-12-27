import style from '@/styles/Ws.module.css';
import { btnAnimation } from './btnAnimation';
import Image from 'next/image';

export const WS = () => {
  return (
    <div className={`${style.position}`}>
        <div className={`${style.relative}`}>
            <span className={`${style.paragraph}`}>Hola! Conecta con nuestros asesores esp.</span>
        </div>
            <div className={`${style.bubble} ${btnAnimation}`}>
                <Image
                src="/whatsapp-icone.png"
                alt="Whatsapp"
                className={``}
                height="32"
                width="32"
                onClick={() =>
                  window.open('https://wa.me/message/UM2QYXKJLYKOB1', '_blank')
                }
                />
      </div>
    </div>
  );
};
