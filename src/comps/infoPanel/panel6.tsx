import React from "react";
import HeatGraph from "../exchange/graph-panel6-1";
import TradingViewWidget from "../exchange/graph-panel6-2";

const Panel6 = () => {
  return (
    <section className="bg-dark-grey grid grid-cols-2">
      <div className="text-center">
        <h1 className="align-middle">Mapa de calor de Criptos</h1>
        <HeatGraph />
      </div>
      <div className="text-center">
        <h1>Mapa de calor de Criptos</h1>
        <TradingViewWidget />
      </div>
    </section>
  );
};

export default Panel6;
