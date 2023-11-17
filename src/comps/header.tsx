import { useWeb3Modal } from "@web3modal/wagmi/react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useState, useContext } from "react";
import { GlobalContext } from "@/context/";


function Header() {
  const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);
  const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] =
  useState(false);
  
  const { Iluminar }  = useContext(GlobalContext);
  
  const closeAll = () => {
    console.log("closeAll");
    setIsNetworkSwitchHighlighted(false);
    setIsConnectHighlighted(false);
  };

  const { open } = useWeb3Modal();

  function scrollToElement(elementId: string) {
    const container = document.getElementById("main");
    const element = document.getElementById(elementId);
    const input = document.getElementById("token1Input");

    if (container && element) {
      const offset = element.offsetTop - container.offsetTop;

      container.scrollTo({
        top: offset,
        behavior: "smooth",
      });
      if (elementId === "exchange") {
        Iluminar();
        input?.focus();
      }
    }
  }

  return (
    <header className="mainHeader grid grid-cols-5 items-center">
        <div className={`col-span-2`}>
          <Image
            src="/LOGO_PARA_FONDO_OSCURO.png"
            alt="WalletConnect Logo"
            width="200"
            height="0"
            sizes="100vw"
            className="h-auto"
          />
        </div>
        <div className="text-center">
          <a href="#" className="light p-1 text-xl" onClick={() => scrollToElement('exchange')}>
            Exchange
          </a>
          <a href="#" className="light p-1 ml-12 text-xl" onClick={() => scrollToElement('stake')}>
            Stake
          </a>
        </div>
        <div className={`${styles.buttons} justify-end col-span-2 flex content-center`}>
          <div className="poligono bg-blue-ligth-arcade cursor-pointer h-fit self-center mr-2">
            <div className="bg-blue-arcade poligono smaller px-5 py-2 text-xl">
              CUENTA
            </div>
          </div>
          <div className="poligono bg-white text-black px-6 py-2 text-xl cursor-pointer h-fit self-center mr-2">
            REGISTRARSE
          </div>
          <Image
            src="/SOPORTE.png"
            alt="Asistencia"
            width="0"
            height="0"
            sizes="100vw"
            className="cursor-pointer h-auto w-16"
          />
          {/* <div
            onClick={closeAll}
            className={`${styles.highlight} ${
              isNetworkSwitchHighlighted ? styles.highlightSelected : ``
            }`}
          >
            <w3m-network-button />
          </div> */}
          {/* <div
            onClick={closeAll}
            className={`${styles.highlight} ${
              isConnectHighlighted ? styles.highlightSelected : ``
            }`}
          >
            <w3m-button />
          </div> */}
          <div className="poligono bg-blue-ligth-arcade cursor-pointer h-fit self-center mr-2">
            <div
              className="poligono smaller bg-black white px-6 py-2 text-xl"
              onClick={() => open()}
            >
              CONNECT
            </div>
          </div>
        </div>
    </header>
  );
}

export default Header;
