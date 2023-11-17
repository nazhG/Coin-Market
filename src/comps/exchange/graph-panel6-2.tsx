import React, { useEffect, useRef, memo, RefObject } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
      {
        "currencies": [
          "EUR",
          "USD",
          "JPY",
          "GBP",
          "CHF",
          "AUD",
          "CAD",
          "NZD"
        ],
        "isTransparent": false,
        "colorTheme": "dark",
        "locale": "es"
      }`;
      if (container.current !== undefined) {
        (container.current as HTMLElement).appendChild(script);
      }
    },
    []
  );

  return (
    // @ts-ignore
    <div className="tradingview-widget-container w-full h-full px-8" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
