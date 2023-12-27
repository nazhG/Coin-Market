import React, { memo } from "react";
import Graph from "../graph";

const Panel5 = () => {
  const graphConfig = {
    url: "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js",
    className: "!h-[110%] !w-full",
    config: {
      colorTheme: "dark",
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
    },
  };

  return (
    <section className="bg-panel5 relative p-8">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source
            src="/VIDEO_FONDO_PANEL_5_e_INTERFAZ_2.mp4"
            type="video/mp4"
          />
          Tu navegador no admite video HTML5.
        </video>
        <div className="degradado"></div>
      </div>

      <div className="relative z-10 grid grid-cols-5 grid-rows-1 gap-16 h-full content-center">
        <div className="col-span-2">
          <p className="mb-8">
            Nos esforzamos en entregar soluciones optimas y rentables a
            inversores en los mercados financieros.
          </p>
          <p className="mb-8">
            Somos asociados de protocolos DEFI y sistemas DAO, Participamos en
            ICO (Initial Coin Offering), IDO (Initial DEX Offering), IEO (Initial
            Exchange Offering) y Launchpad de Criptomonedas.
          </p>
          <p className="mb-8">
            Desarrollamos trading de alta frecuencia en asociación con la
            tecnología de Bitsgap, con Bots DCA, Grip, Infinity en los mercados
            Spot y Futuros (CFDs).
          </p>
        </div>
        <div className="flex col-span-3 justify-center align-middle relative h-full">
          <div className="absolute iframe-overlay"></div>
          <div className="w-1/2 p-1 bg-gradient-green-45 mx-4">
            <div className=" h-full overflow-hidden rounded border border-gray-700">
              <Graph {...graphConfig} />
            </div>
          </div>
          <div className="w-1/2 p-1 bg-gradient-green-45 mx-4">
            <div className="h-full overflow-hidden rounded border border-gray-700">
              <Graph {...graphConfig} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Panel5);
