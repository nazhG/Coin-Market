import React, { useEffect, useRef, useState } from "react";

import MarketInfo from "@/comps/infoPanel/market";
import Info from "@/comps/infoPanel/info";
import Stake from "@/comps/stake/stake";
import Panel4 from "@/comps/infoPanel/panel4";
import Panel5 from "@/comps/infoPanel/panel5";
import Panel6 from "@/comps/infoPanel/panel6";

export const Main = () => {
  const contenedorRef = useRef(null);
  const [currentPanel, setCurrentPanel] = useState(0);
  const [temporizador, setTemporizador] = useState(0);
  const tiempoParaHacerAutoScroll = 250;

  useEffect(() => {
    const _contenedor = contenedorRef.current;
    if (!_contenedor) return;
    const contenedor = _contenedor as HTMLElement;

    function ejecutarDespuesDeUnSegundo() {
      const panelSize = contenedor.querySelector("section")?.clientHeight || 0;
      if (panelSize == 0) return;
      contenedor.scrollTo({
        top: currentPanel * panelSize,
        behavior: "smooth",
      });
    }
    function reiniciarTemporizador() {
      // Si se dispara un evento que requiere reiniciar el temporizador, se cancela el anterior
      if (temporizador !== 0) {
        clearTimeout(temporizador);
      }

      const nuevoTemporizador = setTimeout(ejecutarDespuesDeUnSegundo, tiempoParaHacerAutoScroll);

      setTemporizador(Number(nuevoTemporizador));
    }

    const handleScroll = () => {
      const panelSize = contenedor.querySelector("section")?.clientHeight || 0;
      if (panelSize == 0) return;

      setCurrentPanel(Math.round(contenedor.scrollTop / panelSize));
      reiniciarTemporizador();
    };

    contenedor.addEventListener("scroll", handleScroll);

    return () => {
      contenedor.removeEventListener("scroll", handleScroll);
      if (temporizador) {
        clearTimeout(temporizador);
      }
    };
  });
  return (
    <main id="main" ref={contenedorRef}>
      <MarketInfo />
      <Info />
      <Stake />
      <Panel4 />
      <Panel5 />
      <Panel6 />
    </main>
  );
};
