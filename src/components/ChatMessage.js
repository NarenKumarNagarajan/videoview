import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex w-full items-center pb-2">
      <FaUserCircle className="h-7 w-7 dark:text-white" />
      <div className="flex items-center">
        <span className="ml-2 text-xl font-bold">{name}</span>
        <span className="ml-2 break-all">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
