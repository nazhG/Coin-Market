import React from "react";
import Graph5 from "../exchange/graph-panel5";

const Panel5 = () => {
  return (
    <section className="bg-panel5 relative">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source
            src="/VIDEO_FONDO_PANEL_5_e_INTERFAZ_2.mp4"
            type="video/mp4"
          />
          Tu navegador no admite video HTML5.
        </video>
      </div>

      <div className="relative z-10 grid grid-cols-2 h-full">
        <div className="grid gap-4 h-2/3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            unde temporibus vitae eaque reprehenderit magni ut at possimus. Quia
            illum voluptates distinctio velit earum amet cum asperiores enim
            obcaecati ut.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            unde temporibus vitae eaque reprehenderit magni ut at possimus. Quia
            illum voluptates distinctio velit earum amet cum asperiores enim
            obcaecati ut.
          </p>
        </div>
        <div className="flex justify-center align-middle">
        <Graph5 id="grafica1" name="grafico1" />
        <Graph5 id="grafica2" name="grafico2" />
        </div>
      </div>
    </section>
  );
};

export default Panel5;
