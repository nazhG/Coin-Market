import React, { memo } from "react";
import Script from "next/script";

const Graph = (props: {
  name: string;
  id: string;
}) => {
  const { name, id } = props;
  return (<div className="tradingview-widget-container p-1 bg-gradient-green-45" id={id}>
  <div className="tradingview-widget-container__widget"></div>
  <Script
    id={`tradingview-widget-${id}`}
    type="text/javascript"
    src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"
    onLoad={(e) => {
      const graph = document.getElementById(
        `tradingview-widget-${id}`
      );
      if (graph) {
        document.getElementById(id)?.appendChild(graph);
        // const iframe = graph.contentDocument || graph.contentWindow.document;
        // // console.log(iframe);
        // //   // Agrega reglas CSS al documento dentro del iframe
        // // var style = iframe.createElement('style');
        // // style.textContent = 'body { background-color: lightblue; }'; // Regla CSS que deseas aplicar
        // // iframe.head.appendChild(style);
        // document.getElementsByClassName("js-copyright-label")
      }
    }}
    async
  >
    {JSON.stringify({
      symbol: name,
      width: "220",
      height: 220,
      locale: "es",
      dateRange: "3M",
      colorTheme: "dark",
      isTransparent: true,
      autosize: false,
      largeChartUrl: "",
      noTimeScale: true,
      chartOnly: false,
    })}
  </Script>
</div>
  );
};

export default memo(Graph);
