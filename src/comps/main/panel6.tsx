import React, { memo } from "react";
import Graph from "../graph";

const Panel6 = () => {
  const HeatGraphConfig = {
    url: "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js",
    className: "!h-rem absolute move-left",
    config: {
      dataSource: "Crypto",
      blockSize: "market_cap_calc",
      blockColor: "change",
      locale: "es",
      symbolUrl: "",
      colorTheme: "dark",
      hasTopBar: false,
      isDataSetEnabled: false,
      isZoomEnabled: true,
      hasSymbolTooltip: true,
      width: "110%",
      height: "100%",
    },
  };

  const TradingViewWidgetConfig = {
    url: "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js",
    className: "h-full w-[117%]",
    config: {
      currencies: ["EUR", "USD", "JPY", "GBP", "AUD", "CAD"],
      isTransparent: false,
      colorTheme: "dark",
      locale: "es",
    },
    width: "110%",
    height: "100%",
  };

  return (
    <section className="bg-dark-grey grid grid-cols-2 grid-rows-1 gap-8 relative overflow-hidden p-8 items-center pt-[6%]">
      <div className="absolute iframe-overlay"></div>
      <div className="text-center h-rem">
        <h1 className="align-middle text-3xl font-extrabold h-8 mb-6">Mapa de calor de Criptos</h1>
        <div className="overflow-hidden relative rounded border border-gray-700 h-[80%]">
          <Graph {...HeatGraphConfig} />
        </div>
      </div>
      <div className="text-center h-rem">
        <h1 className="align-middle text-3xl font-extrabold h-8 mb-6">Mapa de calor de Criptos</h1>
        <div className="overflow-hidden relative rounded border border-gray-700 h-[80%]">
          <Graph {...TradingViewWidgetConfig} />
        </div>
      </div>
    </section>
  );
};

export default memo(Panel6);
