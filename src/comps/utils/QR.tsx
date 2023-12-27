import Image from 'next/image';
import QRCode from 'qrcode';
import { useContext, useEffect, useState } from 'react';
import Loader from './loader';
import { FaRegCopy } from 'react-icons/fa6';
import { RiShareFill } from 'react-icons/ri';
import { fetchData } from '@/hooks/fetchData';
import { GlobalContext } from '@/context';
import { erc20ABI, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { btnAnimation } from '../utils/btnAnimation';

const QR = ({ username, amount }: { username: string; amount: bigint }) => {
  const [QR, setQR] = useState('');
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('');

  const { loginToken, logOut } = useContext(GlobalContext);

  const { config, error } = usePrepareContractWrite({
    address: '0x8b447525Ecc63fbB4a3E1Ea1876D4410016CAFDD',
    abi: erc20ABI,
    functionName: 'transfer',
    args: [
      //@ts-ignore
      address.indexOf('0x') === 0 ? address : `0x${address}`,
      BigInt(amount) * BigInt(1e6)
    ]
  });

  console.log(config, error);

  const { write, isLoading, isSuccess } = useContractWrite(config);

  const stringToFile = (str: string) => {
    const partes = str.split(',');
    const datosBase64 = partes[1];

    // Convertir la cadena base64 a un blob
    const byteCharacters = atob(datosBase64);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/png' });

    // Crear un objeto File a partir del Blob
    const file = new File([blob], `coinmarketQRuser_${username}.png`, {
      type: 'image/png'
    });

    return file;
  };

  const handleCopy = () => {
    try {
      navigator.clipboard
        .writeText(address)
        .then(() => {
          console.log('Texto copiado al portapapeles');
        })
        .catch((error) => {
          console.error('Error al copiar al portapapeles:', error);
        });
    } catch (error) {
      console.error('Error al copiar al portapapeles:', error);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Coin Market QR de pago',
          text: 'Gracias por preferirnos, con este QR puedes realizar tu pago',
          files: [stringToFile(QR)]
        });
      } catch (error) {
        console.error('Error al intentar compartir:', error);
      }
    } else {
      console.log('La API de compartir no está disponible en este navegador.');
    }
  };

  useEffect(() => {
    fetchData(
      'user/info/',
      {
        username
      },
      loginToken,
      logOut
    ).then((data) => {
      if (data.error) return;
      setAddress(data.user.address);

      QRCode.toDataURL(`0x${data.address}`)
        .then((url) => {
          console.log(url);
          setQR(url);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="self-center">
        <h2 className="pb-6 flex justify-center">USDT (BEP20)</h2>
        {loading ? (
          <Loader />
        ) : (
          <Image
            src={QR}
            id=""
            alt="QR"
            width="0"
            height="0"
            className="w-full h-auto"
          />
        )}
        <p className="text-sm pt-5">{address}</p>
        <div className="flex gap-3 justify-between pt-5">
          <button
            className={`${btnAnimation} active:bg-gray-400 border px-3 py-2 rounded w-[45%] flex justify-center items-center`}
            onClick={handleShare}
          >
            <RiShareFill className={`${btnAnimation}`} />
          </button>
          <button
            className={`${btnAnimation}  border px-3 py-2 rounded bg-yellow-500 active:bg-yellow-600 text-slate-900 w-[45%] ${
              !write ? 'bg-gray-500 cursor-default' : ''
            }`}
            disabled={!write || isLoading}
            onClick={() => write?.()}
          >
            {isLoading ? (
              <Loader className="text-slate-900 text-sm" />
            ) : (
              'Pagar'
            )}
          </button>
          <button
            className={`${btnAnimation} border px-3 py-2 rounded bg-yellow-500 active:bg-yellow-600 text-slate-900 w-[45%] flex justify-center items-center`}
            onClick={handleCopy}
          >
            <FaRegCopy />
          </button>
        </div>
      </div>
    </>
  );
};

export default QR;
