import { AiOutlineLoading } from 'react-icons/ai';

const Loader = ({
  className = "text-4xl text-blue-500"
}: {
  className?: string;

}) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className={className}>
        <AiOutlineLoading className="animate-spin" />
      </div>
    </div>
  );
};

export default Loader;