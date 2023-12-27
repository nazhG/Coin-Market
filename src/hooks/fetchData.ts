import { notifyError } from "./useNotify";

export const fetchData = async (url: string, param: Object, loginToken: any, logOut: any) => {
    try {
        const res = await fetch(`http://localhost:8080/${url}`,
            {
                method: 'POST',
                headers: {
                    Authorization: `${loginToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            });
    
        // error handling
        console.log({res});
        
            
        const data = await res.json();
    
        if (data.code === 401) { // Unauthorized
            logOut();
        }
        return data;
    } catch (error) {
        // if failed to fetch data
        notifyError('Servidor en mantenimiento, intente más tarde');
        return {error: true};
    }
}
