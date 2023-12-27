import { ReactElement, useContext, useState } from 'react';
import Modal from '../utils/modal';
import { GlobalContext } from '@/context';
import Loader from '../utils/loader';
import { notify, notifyError } from '@/hooks/useNotify';
import QR from '../utils/QR';

declare interface cuentaModalProps {
  isOpen: boolean;
  onClose: () => void;
  msg: ReactElement;
  cantidad: number;
}

const formInputs = {
  tipoCuenta: '',
  cuenta: '',
  titular: '',
  banco: '',
  red: ''
};

const formInputsInicialValues = {
  ...formInputs,
  red: 'BNB'
};

const CuentaModal = ({
  isOpen,
  onClose,
  msg = <></>,
  cantidad
}: cuentaModalProps) => {
  const { loginToken } = useContext(GlobalContext);
  const [input, setInput] = useState(formInputsInicialValues);
  const [showQR, setShowQR] = useState('');

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState(formInputs);

  const handleClose = () => {
    onClose();
    setInput(formInputsInicialValues);
    setShowQR('');
  };

  const username = localStorage.getItem('username') || '';

  const handleSubmmit = async () => {
    let newErrors = formInputs;

    if (input.tipoCuenta == '') {
      newErrors = {
        ...newErrors,
        tipoCuenta: 'Campo requerido'
      };
    }
    if (input.cuenta == '') {
      newErrors = { ...newErrors, cuenta: 'Campo requerido' };
    }
    if (input.titular == '') {
      newErrors = { ...newErrors, titular: 'Campo requerido' };
    }
    if (input.banco == '') {
      newErrors = { ...newErrors, banco: 'Campo requerido' };
    }
    if (input.red == '') {
      newErrors = { ...newErrors, red: 'Campo requerido' };
    }

    if (
      input.tipoCuenta == '' ||
      input.cuenta == '' ||
      input.titular == '' ||
      input.banco == ''
    ) {
      setErrors(newErrors);
      setTimeout(() => setErrors(formInputs), 3000);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/venta', {
        method: 'POST',
        headers: {
          Authorization: `${loginToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tipoCuenta: input.tipoCuenta,
          cuenta: input.cuenta,
          titular: input.titular,
          banco: input.banco,
          red: input.red,
          cantidad: cantidad
        })
      });
      if (response.ok) {
        const data = await response.json();
        const address = data.address;
        console.log('response', address);
        setShowQR(address);

        notify('Solicitud enviada correctamente');
      } else {
        notifyError('Error al precesar solicitud');
      }
      setLoading(false);
    } catch (error) {
      notifyError('Error al precesar solicitud');
      console.error('Error al precesar solicitud:', error);
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {loading ? (
        <Loader />
      ) : showQR == '' ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {msg}
          <hr />
          <p className="text-base my-4">
            Agregar una Cuenta para la recepción de tus fondos
          </p>
          <input
            type="text"
            placeholder="Tipo de cuenta"
            value={input.tipoCuenta}
            onChange={(e) =>
              setInput({
                ...input,
                tipoCuenta: e.target.value
              })
            }
            className={`w-full border rounded px-3 py-2 focus:outline-none text-lg mb-4 ${
              errors.tipoCuenta != ''
                ? 'border-red-500 shadow-md shadow-red-500'
                : ''
            }`}
          />
          <input
            type="text"
            placeholder="Número de cuenta"
            value={input.cuenta}
            onChange={(e) =>
              setInput({
                ...input,
                cuenta: e.target.value
              })
            }
            className={`w-full border rounded px-3 py-2 focus:outline-none text-lg mb-4 ${
              errors.cuenta != ''
                ? 'border-red-500 shadow-md shadow-red-500'
                : ''
            }`}
          />
          <input
            type="text"
            placeholder="Titular de la cuenta"
            value={input.titular}
            onChange={(e) =>
              setInput({
                ...input,
                titular: e.target.value
              })
            }
            className={`w-full border rounded px-3 py-2 focus:outline-none text-lg mb-4 ${
              errors.titular != ''
                ? 'border-red-500 shadow-md shadow-red-500'
                : ''
            }`}
          />
          <input
            type="text"
            placeholder="Banco"
            value={input.banco}
            onChange={(e) =>
              setInput({
                ...input,
                banco: e.target.value
              })
            }
            className={`w-full border rounded px-3 py-2 focus:outline-none text-lg mb-4 ${
              errors.banco != ''
                ? 'border-red-500 shadow-md shadow-red-500'
                : ''
            }`}
          />
          <hr className="mb-2" />
          <label htmlFor="red" className="text-sm mb-4">
            Escoge Red a donde enviaras los USDT
          </label>
          <select
            className={`bg-transparent w-full border rounded px-3 py-2 focus:outline-none text-lg mb-4 ${
              errors.red != '' ? 'border-red-500 shadow-md shadow-red-500' : ''
            }`}
            onChange={(e) =>
              setInput({
                ...input,
                red: e.target.value
              })
            }
            name="red"
          >
            <option value="BNB">USDT-BEP20 (Binance SmartChain)</option>
          </select>
          <button
            type="button"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600"
            onClick={handleSubmmit}
          >
            Continuar
          </button>
        </form>
      ) : (
        <QR username={username} amount={BigInt(cantidad)} />
      )}
    </Modal>
  );
};

export default CuentaModal;
