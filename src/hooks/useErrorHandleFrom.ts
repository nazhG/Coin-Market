import { useState } from "react";

const useErrorHandleFrom = (list: Array<string>) => {
    const [errors, setErrors] = useState({});

    list.forEach((item) => {
        setErrors((prev) => ({ ...prev, [item]: false }));
    });

    const handleErrors = (name: string) => {
        setErrors((prev) => ({ ...prev, [name]: true }));
        setTimeout(() => {
            setErrors((prev) => ({ ...prev, [name]: false }));
        }
            , 2000);
    };

    const showErrors = (name: string) => {
        console.log(errors);
        
        // @ts-ignore
        return errors[name] ? "shadow-outline-red" : "";
    }

    return { handleErrors, showErrors };

}

export default useErrorHandleFrom;