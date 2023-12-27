import React, { useContext, useEffect, useRef, useState } from "react";

import ExchangePanel from "@/comps/exchange/exchangePanel";
import Panel2 from "@/comps/main/panel2";
import StakePanel from "@/comps/stake/stakePanel";
import Panel4 from "@/comps/main/panel4";
import Panel5 from "@/comps/main/panel5";
import Panel6 from "@/comps/main/panel6";
import { GlobalContext } from "@/context";
import Panel7 from "./main/panel7";

export const Main = () => {
  const contenedorRef = useRef(null);
  const [temporizador, setTemporizador] = useState(0);
  const tiempoParaHacerAutoScroll = 1000;



  const scroll = () => {
      // const panelSize = contenedor.querySelector("section")?.clientHeight || 0;
      // if (panelSize == 0) return;
      // contenedor.scrollTo({
      //   top: currentPanel * panelSize,
      //   behavior: "smooth",
      // });
    }
    
    const iniciarTemporizador = () => {
      if (temporizador !== 0) {
        clearTimeout(temporizador);
      }

      const nuevoTemporizador = setTimeout(handleScroll, tiempoParaHacerAutoScroll);
      setTemporizador(Number(nuevoTemporizador));
    }

    const handleScroll = () => {
      const _contenedor = contenedorRef.current;
      if (!_contenedor) return;
      const contenedor = _contenedor as HTMLElement;
      const panelSize = contenedor.querySelector("section")?.clientHeight || 0;
      if (panelSize == 0) return;

      const currentPanel = Math.round(contenedor.scrollTop / panelSize);
      contenedor.scrollTo({
          top: currentPanel * panelSize,
          behavior: "smooth",
        })
    };

  return (
    <main id="main" ref={contenedorRef} >
      <ExchangePanel />
      <Panel2 />
      <StakePanel />
      <Panel4 />
      <Panel5 />
      <Panel6 />
      <Panel7 />
    </main>
  );
};
