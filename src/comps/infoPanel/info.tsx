import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <section className="grid grid-cols-2 bg-panel2">
      <div className="flex justify-center align-middle">
        <iframe
          width="480"
          height="340"
          className="self-center rounded-xl"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
      <div className="grid grid-cols-2 gap-2 h-2/3">
        <h1 className="col-span-2 justify-self-center text-3xl font-extrabold">Market de Theter USDT</h1>
        <p className="flex">
          Pupularidad
          <Image
            src="/Mas_Informacion.png"
            alt="Check"
            className="ml-2 h-fit"
            height="32"
            width="32"
          />
        </p>
        <p className="flex">
          Cap. del mencado
          <Image
            src="/Mas_Informacion.png"
            alt="Check"
            className="ml-2 h-fit"
            height="32"
            width="32"
          />
        </p>
        <p>
          <strong>#3</strong>
        </p>
        <p>
          <strong>USDT $1</strong>
        </p>
        <p className="flex">
          Suministro del circulacion
          <Image
            src="/Mas_Informacion.png"
            alt="Check"
            className="ml-2 h-fit"
            height="32"
            width="32"
          />
        </p>
        <p className="flex">
          Volumen
          <Image
            src="/Mas_Informacion.png"
            alt="Check"
            className="ml-2 h-fit"
            height="32"
            width="32"
          />
        </p>
        <p>
          <strong>USDT $1.000</strong>
        </p>
        <p>
          <strong>83.09 B. USDT</strong>
        </p>
        <div className="col-span-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum
          maxime tempore ex sequi ducimus, laboriosam nulla distinctio.
          Aspernatur non distinctio delectus saepe sequi minus hic dolor debitis
          magnam laborum!
        </div>
      </div>
    </section>
  );
};

export default Info;
