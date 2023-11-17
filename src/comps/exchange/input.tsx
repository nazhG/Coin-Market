import React from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";

const Input = (props: {
  name: string;
  label: string;
}) => {
  const { name, label } = props;
  return (
    <div className="flex p-2 mt-8 bg-slate-600 rounded-lg justify-between">
      <div className="w-2/3">
        <label htmlFor={`${name}Input`} className="text-sm text-gray-400 flex">{label}</label>
        <input type="number" id={`${name}Input`} className="w-full mt-2 text-base" />
      </div>
      <div className="bg-gray-700 flex rounded-full items-center p-2 h-fit self-end">
        <Image
          src="/ICONES_CRIPTOS/bnb.png"
          alt="coin logo"
          className="mr-2"
          height="24"
          width="24"
        />
        <span className="text-sm">COP</span>
        <FaAngleRight className="text-sm ml-2" />
      </div>
    </div>
  );
};

export default Input;
