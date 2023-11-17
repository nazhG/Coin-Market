import React from "react";
import Script from "next/script";

const Graph5 = (props: { name: string; id: string }) => {
  const { name, id } = props;
  return (
    <div
      className="tradingview-widget-container p-1 bg-gradient-green-45 ml-8"
      id={id}
    >
      <div className="tradingview-widget-container__widget"></div>
      <Script
        id={`tradingview-widget-${id}`}
        type="text/javascript"
        src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
        onLoad={(e) => {
          const graph = document.getElementById(`tradingview-widget-${id}`);
          if (graph) {
            document.getElementById(id)?.appendChild(graph);
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
          colorTheme: "light",
          dateRange: "12M",
          showChart: true,
          locale: "es",
          largeChartUrl: "",
          isTransparent: false,
          showSymbolLogo: true,
          showFloatingTooltip: false,
          width: "400",
          height: "660",
          plotLineColorGrowing: "rgba(41, 98, 255, 1)",
          plotLineColorFalling: "rgba(41, 98, 255, 1)",
          gridLineColor: "rgba(240, 243, 250, 0)",
          scaleFontColor: "rgba(106, 109, 120, 1)",
          belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
          belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
          belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
          belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
          symbolActiveColor: "rgba(41, 98, 255, 0.12)",
          tabs: [
            {
              title: "Índices",
              symbols: [
                {
                  s: "FOREXCOM:SPXUSD",
                  d: "S&P 500",
                },
                {
                  s: "FOREXCOM:NSXUSD",
                  d: "US 100",
                },
                {
                  s: "FOREXCOM:DJI",
                  d: "Dow 30",
                },
                {
                  s: "INDEX:NKY",
                  d: "Nikkei 225",
                },
                {
                  s: "INDEX:DEU40",
                  d: "DAX Index",
                },
                {
                  s: "FOREXCOM:UKXGBP",
                  d: "UK 100",
                },
              ],
              originalTitle: "Indices",
            },
            {
              title: "Futuros",
              symbols: [
                {
                  s: "CME_MINI:ES1!",
                  d: "S&P 500",
                },
                {
                  s: "CME:6E1!",
                  d: "Euro",
                },
                {
                  s: "COMEX:GC1!",
                  d: "Gold",
                },
                {
                  s: "NYMEX:CL1!",
                  d: "WTI Crude Oil",
                },
                {
                  s: "NYMEX:NG1!",
                  d: "Gas",
                },
                {
                  s: "CBOT:ZC1!",
                  d: "Corn",
                },
              ],
              originalTitle: "Futures",
            },
            {
              title: "Bonos",
              symbols: [
                {
                  s: "CBOT:ZB1!",
                  d: "T-Bond",
                },
                {
                  s: "CBOT:UB1!",
                  d: "Ultra T-Bond",
                },
                {
                  s: "EUREX:FGBL1!",
                  d: "Euro Bund",
                },
                {
                  s: "EUREX:FBTP1!",
                  d: "Euro BTP",
                },
                {
                  s: "EUREX:FGBM1!",
                  d: "Euro BOBL",
                },
              ],
              originalTitle: "Bonds",
            },
            {
              title: "Forex",
              symbols: [
                {
                  s: "FX:EURUSD",
                  d: "EUR to USD",
                },
                {
                  s: "FX:GBPUSD",
                  d: "GBP to USD",
                },
                {
                  s: "FX:USDJPY",
                  d: "USD to JPY",
                },
                {
                  s: "FX:USDCHF",
                  d: "USD to CHF",
                },
                {
                  s: "FX:AUDUSD",
                  d: "AUD to USD",
                },
                {
                  s: "FX:USDCAD",
                  d: "USD to CAD",
                },
              ],
              originalTitle: "Forex",
            },
          ],
        })}
      </Script>
    </div>
  );
};

export default Graph5;
