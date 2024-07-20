import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";

import { sidebarClose } from "../redux/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const params = searchParams.get("v");

  const sidebarOpen = useSelector((state) => state.appSlice.sidebarOpen);

  useEffect(() => {
    dispatch(sidebarClose(false));

    if (!params) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!params) {
    return;
  }

  return (
    <div className="flex w-full flex-row px-20 py-4 dark:bg-slate-900">
      <div>
        <iframe
          width={sidebarOpen ? `800` : `900`}
          height="480"
          src={"https://www.youtube.com/embed/" + params}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <CommentsContainer />
      </div>
      <div className="w-full dark:text-white">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
