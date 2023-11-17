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

    return (
        <GlobalContext.Provider value={
            {
                IluminacionOn,
                Iluminar
            }
        }>

            {children}

        </GlobalContext.Provider>
    )
}
