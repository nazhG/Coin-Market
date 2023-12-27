import { FaXmark } from "react-icons/fa6";

interface modalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: modalProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50 ease-in-out ml-[-10px] ${
        isOpen ? "" : "top-[130%] opacity-0"
      }`}
    >
      <div
        className="bg-gray-800 p-8 w-96 rounded-lg transition ease-in-out delay-150"
        style={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 }}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <FaXmark className="w-6 h-6 mb-4" />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
