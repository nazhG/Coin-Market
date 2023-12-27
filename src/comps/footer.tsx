import Graph from "./graph";
import { memo } from "react";

function Footer() {
  const graphConfig = {
    url: "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",
    className: "!w-[110%]",
    config: {
      symbols: [
        {
          description: "",
          proName: "BINANCE:BTCUSDT",
        },
        {
          description: "",
          proName: "BINANCE:BNBUSDT",
        },
        {
          description: "",
          proName: "BINANCE:ADAUSDT",
        },
        {
          description: "",
          proName: "BINANCE:SOLUSDT",
        },
        {
          description: "",
          proName: "BINANCE:TRXUSDT",
        },
        {
          description: "",
          proName: "BINANCE:DOGEUSDT",
        },
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "es",
    },
  };
  return (
    <footer className="mainFooter relative">
      <div className="absolute iframe-overlay rounded border border-gray-700"></div>
      <Graph {...graphConfig} />
    </footer>
  );
}

export default memo(Footer);
