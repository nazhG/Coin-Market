import React, { useEffect, useRef, memo } from "react";

function HeatGraph() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "dataSource": "Crypto",
          "blockSize": "market_cap_calc",
          "blockColor": "change",
          "locale": "es",
          "symbolUrl": "",
          "colorTheme": "dark",
          "hasTopBar": false,
          "isDataSetEnabled": false,
          "isZoomEnabled": true,
          "hasSymbolTooltip": true,
          "width": "100%",
          "height": "100%"
        }`;
    if (container.current !== undefined) {
      (container.current as HTMLElement).appendChild(script);
    }
  }, []);

  return (
    // @ts-ignore
    <div className="tradingview-widget-container w-full px-8" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(HeatGraph);
