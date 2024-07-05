import { useEffect, useState } from "react";
import { DASHBOARD_VIDEOS_LINK } from "../utils/globalConstants";
import VideoCard from "./VideoCard";

const MainContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(DASHBOARD_VIDEOS_LINK);
    const data = await response.json();
    setVideos(data.items);
  };

  return (
    <div className="flex w-full flex-row flex-wrap p-3 dark:bg-slate-900">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default MainContainer;
