import { useEffect, useState } from "react";
import useDurationThumbnail from "../hooks/useDurationThumbnail";
import usePublishedTime from "../hooks/usePublishedTime";
import useWatchCount from "../hooks/useWatchCount";
import { CHANNEL_DETAIL_LINK } from "../utils/globalConstants";

const VideoCard = ({ video }) => {
  const { snippet, statistics, contentDetails } = video;
  const { title, thumbnails, channelTitle, publishedAt, channelId } = snippet;
  const { viewCount } = statistics;
  const { duration } = contentDetails;

  const videoDuration = useDurationThumbnail(duration);
  const watchedCount = useWatchCount(viewCount);
  const publishedAgo = usePublishedTime(publishedAt);
  const [channelLogo, setChannelLogo] = useState("");

  useEffect(() => {
    const getChannelDetails = async () => {
      const response = await fetch(CHANNEL_DETAIL_LINK + channelId);
      const data = await response.json();
      setChannelLogo(data.items[0].snippet.thumbnails.default.url);
    };

    getChannelDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="m-4 w-[320px] cursor-pointer rounded-xl dark:text-white">
      <div className="relative">
        <img
          src={thumbnails.medium.url}
          alt="thumbImg"
          className="w-full rounded-xl"
        />
        <p className="absolute bottom-2 right-2 rounded-lg bg-black px-2 py-1 font-semibold text-white">
          {videoDuration}
        </p>
      </div>
      <div className="flex w-full flex-row items-start justify-start py-2">
        {/* <h1 className="rounded-full bg-black px-5 py-3 text-xl font-bold text-white dark:bg-white dark:text-black">
          {channelTitle[0]}
        </h1> */}
        <div className="mt-2 h-16 w-16">
          <img src={channelLogo} alt="channelLogo" className="rounded-full" />
        </div>
        <ul className="ml-2">
          <li className="text-md">
            {title.length > 60 ? `${title.slice(0, 60)}...` : title}
          </li>
          <li className="text-lg text-gray-600 dark:text-white">
            {channelTitle}
          </li>
          <li className="text-gray-600 dark:text-white">
            <span>{watchedCount} views</span>
            <span> . {publishedAgo}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ video }) => {
  return (
    <div className="relative">
      <VideoCard video={video} />
      <p className="absolute left-4 top-4 rounded-lg bg-black px-3 py-2 font-semibold text-white">
        ad
      </p>
    </div>
  );
};

export default VideoCard;
