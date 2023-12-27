import { Button } from 'antd';
import Image from 'next/image';
import CuentaModal from './cuentaModal';
import { GlobalContext } from '@/context';
import LoginModal from '../login/LoginModal';
import { useContext, useEffect, useState } from 'react';
import { notifyError } from '@/hooks/useNotify';
import { Box } from '../utils/box';
import { FaArrowLeft, FaClockRotateLeft, FaQrcode } from 'react-icons/fa6';
import { btnAnimation } from '../utils/btnAnimation';
import { fetchData } from '@/hooks/fetchData';
import Loader from '../utils/loader';

export const Exchange = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCuenta, setShowCuenta] = useState(false);
  const [compra, setCompra] = useState(true);
  const [inputIn, setInputIn] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  const [tasa, setTasa] = useState(0);
  const criptos = ['USDT'];
  const fiat = ['COP'];
  const [showHistory, setShowHistory] = useState(false);
  const spread = 0.995; //1.5%
  const [loading, setLoading] = useState(false);
  const [ventas, setVentas] = useState([]);

  const [errors, setErrors] = useState({
    inputIn: ''
  });

  const { loginToken, showLoginModal, logOut, userName } =
    useContext(GlobalContext);

  const handleSubmmit = () => {
    if (inputIn <= 0) {
      notifyError('Ingrese una cantidad valida');
      setErrors({
        inputIn: 'Ingrese una cantidad valida'
      });
      setTimeout(() => {
        setErrors({
          inputIn: ''
        });
      }, 3000);

      return;
    }
    if (compra) {
      handleCompra();
    } else {
      handleVenta();
    }
  };

  useEffect(() => {
    fetch('http://localhost:8080/conversion?symbol=COPUSD')
      .then((res) => res.json())
      .then((data) => {
        const tasa = data;
        setTasa(Number(tasa.price));
      })
      .catch((err) => {
        notifyError('No se pudo obtener la tasa de cambio');
      });

    const fetchGasPrice = async () => {
      try {
        const apiKey = '3VVZMWDSNT2Z4X1717J5HEZN5DFUZNPUNE';
        const response = await fetch(
          `https://api.bscscan.com/api?module=gastracker&action=gasoracle&apikey=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          const gasFee = data.result.ProposeGasPrice;
          const usdtPrice = data.result.UsdPrice;

          const price = (Number(usdtPrice) * Number(gasFee)) / 1e6;

          // @ts-ignore
          setGasPrice(price.toFixed(4));
        } else {
          console.error(
            'Error al obtener la tarifa de gas:',
            response.statusText
          );
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchGasPrice();
  }, []);

  function handleCompra() {
    notifyError('Compra no disponible');
  }

  function handleVenta() {
    if (!loginToken) {
      setShowLogin(true);
    } else {
      setShowCuenta(true);
    }
  }

  const fetchVentas = async () => {
    setLoading(true);
    fetchData('user/getVentas/', { username: userName }, loginToken, logOut)
      .then((data) => {
        setVentas(data.ventas);
      })
      .finally(() => setLoading(false));
  };

  const modalHeader = (
    <div className="text-base px-8 mb-8">
      Intercambiara {inputIn} USDT <br />
      <Box tittle="Network Fee">
        <div className="grid grid-cols-2 p-3 text-gray-200">
          <span>Tarifa de red:</span>
          <span className="text-right">{gasPrice} USD</span>
          <span>Spread</span>
          <span className="text-right">0.5% - 1.5%</span>
          <span>Tasa de cambio</span>
          <span className="text-right">1 USD = {tasa} COP</span>
        </div>
      </Box>
      Usted Recibe {inputIn * tasa * spread} COP en su cuenta.
    </div>
  );

  const selected = 'border-double border-b-4 border-cyan-700';
  const unselected = 'border-solid border-b-4 border-gray-700';
  return (
    <>
      <LoginModal
        isOpen={showLogin}
        onClose={() => {
          setShowLogin(false);
          setShowCuenta(true);
        }}
        msg={modalHeader}
      />

      {loginToken && (
        <CuentaModal
          isOpen={showCuenta}
          onClose={() => setShowCuenta(false)}
          msg={modalHeader}
          cantidad={inputIn}
        />
      )}
      {loginToken !== null && (
        <div className="flex justify-end pb-8 px-4">
          <FaArrowLeft
            onClick={() => {
              setShowHistory(false);
            }}
            className={`${btnAnimation} self-end text-[1.2rem] text-gray-400 cursor-pointer ${
              !showHistory ? 'hidden' : ''
            }`}
          />
          <FaClockRotateLeft
            onClick={() => {
              setShowHistory(true);
              fetchVentas();
            }}
            className={`${btnAnimation} self-end text-[1.2rem] text-gray-400 cursor-pointer ${
              showHistory ? 'hidden' : ''
            }`}
          />
        </div>
      )}
      {showHistory ? (
        loading ? (
          <Loader />
        ) : (
          <>
            {ventas.length > 0 ? (
              <>
                <div className="flex justify-between px-4">
                  <div className="text-lg text-gray-400">Tipo</div>
                  <div className="text-lg text-gray-400">Estado</div>
                  <div className="text-lg text-gray-400">Cantidad</div>
                  <div className="text-lg text-gray-400">QR</div>
                </div>
                <div className="overflow-y-auto h-[400px]">
                  {ventas.map((venta: any, i) => (
                    <div
                      className="flex justify-between px-4 py-2 border-b border-gray-700"
                      key={`venta${i}`}
                    >
                      <div className="text-lg text-gray-100">Venta</div>
                      <div className="text-lg text-gray-100">
                        {venta.estado}
                      </div>
                      <div className="text-lg text-gray-100">
                        {venta.cantidad}
                      </div>

                      <span
                        className="cursor-pointer hover:text-blue-500 transition duration-300 text-[1.2rem]"
                        onClick={() => setShowCuenta(true)}
                      >
                        <FaQrcode />
                      </span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center text-gray-400">No hay ventas</div>
            )}
          </>
        )
      ) : (
        <form action="" className={`h-auto text-center pb-8 px-4`}>
          <div className="flex justify-around mb-16">
            <div
              className={`cursor-pointer w-1/2 transicion ${
                compra ? selected : unselected
              }`}
              onClick={() => {
                setCompra(true);
              }}
            >
              Compra
            </div>
            <div
              className={`cursor-pointer w-1/2 transicion ${
                compra ? unselected : selected
              }`}
              onClick={() => {
                setCompra(false);
              }}
            >
              Venta
            </div>
          </div>
          {/* Input IN */}
          <div
            className={`flex p-2 mt-8 bg-slate-600 rounded-lg justify-between transicion duration-300 ease-in-out border border-transparent ${
              errors.inputIn ? '!border-red-500 shadow-md shadow-red-500' : ''
            }`}
          >
            <div className="w-2/3">
              <label
                htmlFor={`Cantidad`}
                className="text-sm text-gray-400 flex"
              >
                Cantidad
              </label>
              <input
                type="number"
                id={`Cantidad`}
                className="w-full mt-2 text-base"
                value={inputIn}
                onChange={(e) => setInputIn(parseInt(e.target.value))}
              />
            </div>
            <div
              className="bg-gray-700 flex rounded-full items-center p-2 h-fit self-end border border-transparent hover:border-gray-400"
              onClick={() => {
                {
                  const select = document.getElementById('cantidadMoneda');
                  if (select === null) return;
                  select.click();
                }
              }}
            >
              <Image
                src={
                  compra
                    ? '/colombia_18292.png'
                    : '/ICONES_CRIPTOS/usdt-icon.png'
                }
                alt="coin logo"
                className="mr-2"
                height="24"
                width="24"
              />
              <select
                name="cantidadMoneda"
                id="cantidadMoneda"
                title="Moneda"
                className="text-base bg-transparent outline-none cursor-pointer"
              >
                {(compra ? fiat : criptos).map((moneda) => (
                  <option
                    value={moneda}
                    key={`Input1${moneda}`}
                    className="bg-stone-400 focus:outline-none"
                  >
                    {moneda}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Input OUT */}
          <div className="flex p-2 mt-12 bg-slate-600 rounded-lg justify-between">
            <div className="w-2/3">
              <label htmlFor="Recibir" className="text-sm text-gray-400 flex">
                Recibir
              </label>
              <input
                type="text"
                id="Recibir"
                className="w-full mt-2 text-base text-gray-500"
                value={
                  compra
                    ? (inputIn || 0) / (tasa || 1)
                    : ((inputIn || 0) * (tasa || 0)).toLocaleString('es-CO', {
                        currency: 'COP'
                      })
                }
                disabled={true}
              />
            </div>
            <div className="bg-gray-700 flex rounded-full items-center p-2 h-fit self-end border border-transparent hover:border-gray-400">
              <Image
                src={
                  !compra
                    ? '/colombia_18292.png'
                    : '/ICONES_CRIPTOS/usdt-icon.png'
                }
                alt="coin logo"
                className="mr-2"
                height="24"
                width="24"
              />
              <select
                name="monedaRecibir"
                id="monedaRecibir"
                title="Moneda"
                className="text-base bg-transparent outline-none cursor-pointer"
              >
                {(compra ? criptos : fiat).map((moneda) => (
                  <option
                    value={moneda}
                    key={`Input1${moneda}`}
                    className="bg-stone-400 focus:outline-none"
                  >
                    {moneda}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Button
            className="mt-20 yellow bg-blue w-full rounded py-2 border-none text-2xl font-semibold h-fit hover:scale-105"
            onClick={handleSubmmit}
          >
            {compra ? 'COMPRAR' : 'VENDER'}
          </Button>
        </form>
      )}
    </>
  );
};
