import { useState } from "react";

declare interface boxProps {
  children: React.ReactNode;
  tittle: string;
}

export const Box = ({ children, tittle }: boxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <p
        className="text-blue-400 cursor-pointer hover:text-blue-500 transition duration-300 text-xs pb-3 text-right"
        onClick={() => setIsOpen(!isOpen)}
      >
        {tittle}
      </p>
      <div
        className={`bg-gray-400 rounded transition-all duration-500 ease-in-out border border-blue-400 ${
          isOpen
            ? "opacity-100 max-h-96 mb-8"
            : "opacity-0 max-h-0 overflow-hidden"
        }
      `}
      >
        {children}
      </div>
    </>
  );
};
