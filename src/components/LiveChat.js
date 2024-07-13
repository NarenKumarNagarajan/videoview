import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatMessage from "./ChatMessage";
import { addMessages, chatStatus } from "../redux/chatSlice";
import { messageGenerate, nameGenerate } from "../utils/globalConstants";
import { LuSendHorizonal } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const LiveChat = () => {
  const [sendMessage, setSendMessage] = useState("");

  const dispatch = useDispatch();
  const allMessage = useSelector((state) => state.chatSlice.message);
  const chatOpen = useSelector((state) => state.chatSlice.chatOpen);

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
    <div
      className={`ml-4 ${!chatOpen ? "h-[50px]" : "h-[480px]"} w-full rounded-lg border border-gray-600 dark:border-white`}
    >
      <div
        className={`flex h-[50px] items-center justify-between p-3 text-lg font-bold ${!chatOpen ? null : "border-b border-gray-600 dark:border-white"}`}
      >
        <h1>Live Chat</h1>
        <button
          className="cursor-pointer"
          onClick={() => dispatch(chatStatus())}
        >
          {chatOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
      <div
        className={`flex h-[380px] w-full flex-col-reverse overflow-y-auto border-b border-gray-600 bg-gray-200 p-3 dark:border-white dark:bg-slate-600 ${!chatOpen ? "hidden" : null}`}
      >
        {allMessage.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <div
        className={`flex h-[50px] flex-row items-center justify-center ${!chatOpen ? "hidden" : null}`}
      >
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
