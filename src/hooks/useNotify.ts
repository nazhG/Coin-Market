
import { ToastOptions, toast } from "react-toastify";

const notifyConfig: ToastOptions = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    theme: "dark",
};

const notify = (msg: string) => toast.success(msg, notifyConfig);

const notifyError = (msg: string) => toast.error(msg, notifyConfig);

export { notify, notifyError };