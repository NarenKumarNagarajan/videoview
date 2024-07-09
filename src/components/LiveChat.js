import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatMessage from "./ChatMessage";
import { addMessages } from "../redux/chatSlice";
import { messageGenerate, nameGenerate } from "../utils/globalConstants";
import { LuSendHorizonal } from "react-icons/lu";

const LiveChat = () => {
  const [sendMessage, setSendMessage] = useState("");

  const dispatch = useDispatch();
  const allMessage = useSelector((state) => state.chatSlice.message);

  useEffect(() => {
    const chatInterval = setInterval(() => {
      dispatch(
        addMessages({
          name: nameGenerate(),
          message: messageGenerate(),
        }),
      );
    }, 1000);

    return () => clearInterval(chatInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessageLive = () => {
    if (sendMessage !== "") {
      dispatch(
        addMessages({
          name: "Naren",
          message: sendMessage,
        }),
      );

      setSendMessage("");
    }
  };

  return (
    <div className="ml-4 h-[480px] w-full rounded-lg border border-gray-600 dark:border-white">
      <h1 className="h-[50px] border-b border-gray-600 p-3 text-lg font-bold dark:border-white">
        Live Chat
      </h1>
      <div className="flex h-[380px] w-full flex-col-reverse overflow-y-auto border-b border-gray-600 bg-gray-200 p-3 dark:border-white dark:bg-slate-600">
        {allMessage.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <div className="flex h-[50px] flex-row items-center justify-center">
        <input
          type="text"
          placeholder="lets chat..."
          className="w-5/6 rounded-l-full border border-gray-400 px-2 py-1 text-black focus:outline-none dark:border-white"
          value={sendMessage}
          onChange={(e) => setSendMessage(e.target.value)}
        />
        <button
          className="cursor-pointer rounded-r-full border border-l-0 border-gray-400 px-3 py-[6px] dark:border-white"
          onClick={sendMessageLive}
        >
          <LuSendHorizonal className="h-5 w-5 dark:text-white" />
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
