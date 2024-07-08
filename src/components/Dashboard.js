import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { DASHBOARD_VIDEOS_LINK } from "../utils/globalConstants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { sidebarClose } from "../redux/appSlice";

const Dashboard = () => {
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();
  const sidebarStatus = useSelector((state) => state.appSlice.sidebarOpen);

  useEffect(() => {
    if (!sidebarStatus) {
      dispatch(sidebarClose(true));
    }
    getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getVideos = async () => {
    const response = await fetch(DASHBOARD_VIDEOS_LINK);
    const data = await response.json();
    setVideos(data.items);
  };

  return (
    <div className="flex w-full flex-row flex-wrap p-3 dark:bg-slate-900">
      {videos[0] && <AdVideoCard video={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default Dashboard;
