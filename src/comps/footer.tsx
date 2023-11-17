import styles from "@/styles/Home.module.css";
import Script from "next/script";

function Footer() {
  return (
    <footer className="mainFooter">
      <div className="tradingview-widget-container" id="tape">
        <div className="tradingview-widget-container__widget"></div>
        <Script
          id={`tradingview-widget-tape`}
          type="text/javascript"
          src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
          onLoad={(e) => {
            const graph = document.getElementById(`tradingview-widget-tape`);
            console.log(graph);
            
            if (graph) {
              document.getElementById("tape")?.appendChild(graph);
              // const iframe =
              //   graph.contentDocument || graph.contentWindow.document;
              // // console.log(iframe);
              // //   // Agrega reglas CSS al documento dentro del iframe
              // // var style = iframe.createElement('style');
              // // style.textContent = 'body { background-color: lightblue; }'; // Regla CSS que deseas aplicar
              // // iframe.head.appendChild(style);
              // document.getElementsByClassName("js-copyright-label");
            }
          }}
          async
        >
          {JSON.stringify({
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
          })}
        </Script>
      </div>
    </footer>
  );
}

export default Footer;
