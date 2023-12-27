import React, { useEffect, useRef, memo } from "react";

function Graph({
  url,
  config,
  className,
}: {
  url: string;
  config: Object;
  className: string;
}) {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify(config);
    script.onload = (e) => {
      
    };
    if (container.current !== undefined) {
      (container.current as HTMLElement).appendChild(script);
    }
  });

  return (
    // @ts-ignore
    <div className={`tradingview-widget-container ${className} !overflow-hidden`} ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(Graph);
