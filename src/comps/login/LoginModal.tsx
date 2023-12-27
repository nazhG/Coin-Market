import { ReactElement, useContext, useState } from "react";
import { GlobalContext } from "@/context";
import { notify, notifyError } from "@/hooks/useNotify";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Modal from "../utils/modal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  msg: ReactElement;
}

const formInputs = {
  email: "",
  password: "",
  username: "",
  repeatPassword: "",
  acceptTerms: "",
};

const LoginModal = ({ isOpen, onClose, msg = <></> }: LoginModalProps) => {
  const { logIn, logOut, setUserName } = useContext(GlobalContext);
  const [loginModal, setLoginModal] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState(formInputs);

  const [errors, setErrors] = useState(formInputs);

  const clearErrors = () => {
    setErrors(formInputs);
  };

  const handleLogin = async () => {
    let newErrors = formInputs;
    if (form.username === "") {
      newErrors = {
        ...newErrors,
        username: "El nombre de usuario es requerido",
      };
    }
    if (form.password === "") {
      newErrors = { ...newErrors, password: "La contraseña es requerida" };
    }
    if (form.password === "" || form.username === "") {
      setErrors(newErrors);
      setTimeout(clearErrors, 3000);
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      });
      if (response.ok) {
        setIsLoading(false);
        const data = await response.json();
        const token = data.token;
        console.log("User created:", data);

        logIn(token, data.username);
        setForm(formInputs);
        notify("Login exitoso");
        onClose();
      } else {
        setIsLoading(false);
        logOut();
        console.error("No se pudo crear usuario");
        notifyError("Error al iniciar sesión");
      }
    } catch (error) {
      setIsLoading(false);
      logOut();
      notifyError("No se pudo iniciar sesión");
      console.error("Error al crear sesión:", error);
    }
  };

  const handleRegister = async () => {
    const newErrors = formInputs;
    if (form.username === "") {
      newErrors.username = "El nombre de usuario es requerido";
    }
    if (form.password === "") {
      newErrors.password = "La contraseña es requerida";
    }
    if (form.repeatPassword === "" || form.password !== form.repeatPassword) {
      newErrors.repeatPassword = "La contraseña es requerida";
    }
    if (form.email === "") {
      newErrors.email = "El correo electrónico es requerido";
    }
    if (form.acceptTerms === "") {
      newErrors.acceptTerms = "Debe aceptar los terminos y condiciones";
    }
    if (
      form.username === "" ||
      form.password === "" ||
      form.repeatPassword === "" ||
      form.email === "" ||
      form.acceptTerms === ""
    ) {
      console.log("Errors:", newErrors);
      setErrors(newErrors);
      setTimeout(clearErrors, 3000);
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
          email: form.email,
        }),
      });
      if (response.ok) {
        setIsLoading(false);
        const data = await response.json();
        const token = data.token;
        console.log("User created:", data);

        logIn(token, data.username);
        setForm(formInputs);
        notify("Usuario creado exitosamente");
        onClose();
      } else {
        setIsLoading(false);
        logOut();
        console.error("No se pudo crear usuario");
        notifyError("Error al crear usuario");
      }
    } catch (error) {
      setIsLoading(false);
      logOut();
      notifyError("No se pudo crear usuario");
      console.error("Error al crear usuario:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {msg}
      <h2 className="text-center font-semibold mb-2">
        {loginModal ? "LOGIN" : "REGISTRO"}
      </h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className={`w-full rounded px-3 py-2 focus:outline-none text-lg transition-all duration-500 border ${
            errors.username ? "!border-red-500 shadow-md shadow-red-500" : ""
          }`}
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          onKeyDown={(e) => {
            if (loginModal && e.key === "Enter") {
              handleLogin();
            }
          }}
          className={`w-full rounded px-3 py-2 focus:outline-none text-lg transition-all duration-500 border ${
            errors.password ? " !border-red-500 shadow-md shadow-red-500" : ""
          }`}
        />
      </div>
      <div
        className={`transition-all duration-500 ease-in-out ${
          loginModal
            ? "opacity-0 max-h-0 overflow-hidden"
            : "opacity-100 max-h-96 mb-4"
        }`}
      >
        <input
          type="password"
          placeholder="Repetir contraseña"
          value={form.repeatPassword}
          onChange={(e) => setForm({ ...form, repeatPassword: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
          className="w-full border rounded px-3 py-2 focus:outline-none text-lg"
        />
      </div>
      <div
        className={`transition-all duration-500 ease-in-out ${
          loginModal
            ? "opacity-0 max-h-0 overflow-hidden"
            : "opacity-100 max-h-96 mb-4"
        }`}
      >
        <input
          type="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border rounded px-3 py-2 focus:outline-none text-lg"
        />
      </div>
      <div
        className={`transition-all duration-500 ease-in-out mb-8 px-3 ${
          loginModal
            ? "opacity-0 max-h-0 overflow-hidden"
            : "opacity-100 max-h-96 mb-8"
        }`}
      >
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5"
            checked={form.acceptTerms === "true"}
            onChange={(e) => {
              setForm({ ...form, acceptTerms: e.target.checked ? "true" : "" });
            }}
          />
          <span className="ml-2 text-gray-400 text-sm">
            Terns & Security Policy
          </span>
        </label>
      </div>
      <button
        onClick={() => {
          if (loginModal) {
            handleLogin();
          } else {
            handleRegister();
          }
        }}
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600"
      >
        {isLoading ? (
          <Spin
            indicator={
              <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />
            }
          />
        ) : (
          "Continuar"
        )}
      </button>
      <p
        className="text-center mt-4 text-blue-400 text-xs cursor-pointer hover:text-blue-500 transition duration-300"
        onClick={() => setLoginModal(!loginModal)}
      >
        {loginModal ? "¿Todavia no tienes cuenta?" : "¿Ya tienes cuenta?"}
      </p>
    </Modal>
  );
};

export default LoginModal;
