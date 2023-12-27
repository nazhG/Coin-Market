import { useWeb3Modal } from '@web3modal/wagmi/react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@/context/';
import { useAccount } from 'wagmi';
import { jwtDecode } from 'jwt-decode';
import LoginModal from './login/LoginModal';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

const formatAddress = (address: string) => {
  if (!address) return '';
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};

function Header() {
  const { address, isDisconnected, isConnecting } = useAccount();
  const [showLogin, setShowLogin] = useState(false);

  const {
    Iluminar,
    LoginMsg,
    loginToken,
    userName,
    setUserName,
    logIn,
    logOut
  } = useContext(GlobalContext);

  const { open } = useWeb3Modal();

  function scrollToElement(elementId: string) {
    const container = document.getElementById('main');
    const element = document.getElementById(elementId);
    const input = document.getElementById('token1Input');

    if (container && element) {
      const offset = element.offsetTop - container.offsetTop;

      container.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
      if (elementId === 'exchange') {
        Iluminar();
        input?.focus();
      }
    }
  }

  const validarTokenJWT = (token: string): boolean => {
    try {
      const decodedToken: { [key: string]: any } = jwtDecode(token);

      const currentTime = Date.now() / 1000; // Tiempo actual en segundos
      console.log(decodedToken.exp);

      if (decodedToken.exp && decodedToken.exp < currentTime) {
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  useEffect(
    () => {
      const token = localStorage.getItem('jwtLoginToken');
      console.log('token', token);

      const esTokenValido = validarTokenJWT(token || '');
      console.log('esTokenValido', esTokenValido);

      if (esTokenValido) {
        logIn(token, localStorage.getItem('username'));
      } else {
        logOut();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <header className="h-[10vh] grid xl:grid-cols-5 lg:grid-cols-4 items-center px-8">
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        msg={LoginMsg}
      />
      <div className={`xl:col-span-2`}>
        <Image
          src="/LOGO_PARA_FONDO_OSCURO.png"
          alt="WalletConnect Logo"
          width="200"
          height="0"
          sizes="100vw"
          className="h-auto"
        />
      </div>
      <div className="text-center flex">
        <a
          href="#"
          className="light p-1 text-xl"
          onClick={() => scrollToElement('exchange')}
        >
          <p className=" hover:scale-110 transition duration-300 text-shadow">
            Exchange
          </p>
        </a>
        <a
          href="#"
          className="light p-1 ml-12 text-xl"
          onClick={() => scrollToElement('stake')}
        >
          <p className=" hover:scale-110 transition duration-300 text-shadow">
            Stake
          </p>
        </a>
      </div>
      <div className={`${styles.buttons} justify-end flex col-span-2`}>
        {loginToken !== null ? (
          <>
            <div className="poligono mr-4 flex bg-white self-center transition duration-300 transform hover:scale-110">
              <div
                className="bg-black poligono smaller px-3 py-1 text-lg text-white cursor-pointer"
                onClick={() => {
                  window.location.href = './cuenta';
                }}
              >
                {userName}
              </div>
            </div>

            <div
              title="logout"
              onClick={() => {
                logOut();
              }}
              className=" mr-4 flex self-center transition duration-300 transform hover:scale-110 cursor-pointer"
            >
              <FaArrowRightFromBracket />
            </div>
          </>
        ) : (
          <>
            <div className="poligono bg-blue-ligth-arcade cursor-pointer h-fit self-center mr-2 transition duration-300 transform hover:scale-110">
              <div className="bg-blue-arcade poligono smaller px-3 py-1 text-lg">
                CUENTA
              </div>
            </div>
            <div
              className="poligono bg-white text-black px-3 py-1 text-lg cursor-pointer h-fit self-center mr-2 transition duration-300 transform hover:scale-110"
              onClick={() => setShowLogin(true)}
            >
              REGISTRARSE
            </div>
          </>
        )}
        <Image
          src="/SOPORTE.png"
          alt="Asistencia"
          width="0"
          height="0"
          sizes="100vw"
          className="cursor-pointer h-auto w-16 transition duration-300 transform hover:scale-110"
          onClick={() => {
            window.open('./sugerencias', '_blank');
          }}
        />
        <div className="poligono bg-blue-ligth-arcade cursor-pointer h-fit self-center mr-2 transition duration-300 transform hover:scale-110">
          <div
            className="poligono smaller bg-black white px-3 py-1 text-lg"
            onClick={() => open()}
          >
            {isConnecting && 'CONNECTING...'}
            {isDisconnected ? `CONNECT WALLET` : formatAddress(address || '')}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
