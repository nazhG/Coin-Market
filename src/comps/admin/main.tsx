import { GlobalContext } from "@/context/admin";

import Login from "@/comps/admin/login";
import { useContext, useState } from "react";
import Image from "next/image";
import { Users } from "./users";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Ventas } from "./ventas";

export const Main = () => {
    const menu = [{ text: "Users", content: <Users key={0} /> },
  { text: "Ventas", content: <Ventas key={1} /> }];
  const { loginToken, logOut } = useContext(GlobalContext);
  const [content, setContent] = useState(menu[0].content);

  return (
    <>
      {!loginToken ? (
        <Login />
      ) : (
        <div className="flex box-border">
          {/* Side menu */}
          <div className="bg-gray-700 h-screen w-1/4 p-4">
            <div className="flex justify-between items-center mb-12" onClick={logOut}>
              <Image
                src="/LOGO_PARA_FONDO_OSCURO.png"
                alt="WalletConnect Logo"
                width="200"
                height="0"
                sizes="100vw"
                className="h-auto"
              />
              <div title="logout">
                <FaArrowRightFromBracket />
              </div>
            </div>
            <ul>
              {menu.map((item, index) => (
                <li
                  className="cursor-pointer mb-4"
                  onClick={() => setContent(item.content)}
                  key={index}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          {/* Content */}
          <div className="flex-grow p-4">{content}</div>
        </div>
      )}
    </>
  );
};
