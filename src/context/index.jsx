import { createContext, useState } from "react";


export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [IluminacionOn, setIluminacionOn] = useState(false)
    const Iluminar = () => {
        setIluminacionOn(true)
        setTimeout(() => {
            setIluminacionOn(false)
        }, 1000);
    }

    const [loginToken, setLoginToken] = useState(null);
    const [userName, setUserName] = useState(null);

    const logOut = () => {
        // escribe en rojo
        console.log('%cDeslogueo', 'color: red;');
        setLoginToken(null);
        localStorage.removeItem("jwtLoginToken");
        setUserName(null);
        localStorage.removeItem("username");
    }

    const logIn = (loginToken, username) => {
        console.log('%cLogueo', 'color: green;');
        setLoginToken(loginToken);
        localStorage.setItem("jwtLoginToken", loginToken);
        setUserName(username);
        localStorage.setItem("username", username);
    }

    const [LoginMsg, setLoginMsg] = useState(<></>);

    return (
        <GlobalContext.Provider value={
            {
                IluminacionOn,
                Iluminar,
                loginToken,
                setLoginToken,
                LoginMsg,
                setLoginMsg,
                userName,
                setUserName,
                logOut,
                logIn
            }
        }>

            {children}

        </GlobalContext.Provider>
    )
}
