import { FormEvent, useContext, useState } from "react";
import { GlobalContext } from "@/context/admin";
import useErrorHandleFrom from "@/hooks/useErrorHandleFrom";

const Login = () => {
  const { setIsLogin } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "") {
      setIsLogin(true);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Inicio de sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Correo electrónico
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingrese su correo electrónico"
              className={`text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              className="text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="text-gray-600 text-sm mt-4">
          Panel de administración de Coin Market
        </p>
      </div>
    </div>
  );
};

export default Login;
