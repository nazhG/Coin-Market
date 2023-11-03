import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";

function Header() {
  const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);
  const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] =
    useState(false);

  const closeAll = () => {
    console.log("closeAll");
    setIsNetworkSwitchHighlighted(false);
    setIsConnectHighlighted(false);
  };
  return (
    <header className="mainHeader">
      <div
        className={styles.backdrop}
        style={{
          opacity: isConnectHighlighted || isNetworkSwitchHighlighted ? 1 : 0,
        }}
      />
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="WalletConnect Logo"
            height="32"
            width="203"
          />
        </div>
        <div>
            <a href="#stake" className="light p-1">Stake</a>
            <a href="#" className="light p-1">Exchange</a>
        </div>
        <div className={styles.buttons}>
          <div
            onClick={closeAll}
            className={`${styles.highlight} ${
              isNetworkSwitchHighlighted ? styles.highlightSelected : ``
            }`}
          >
            <w3m-network-button />
          </div>
          <div
            onClick={closeAll}
            className={`${styles.highlight} ${
              isConnectHighlighted ? styles.highlightSelected : ``
            }`}
          >
            <w3m-button />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
