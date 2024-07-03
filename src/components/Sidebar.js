import {
  MdHomeFilled,
  MdSubscriptions,
  MdOutlineWatchLater,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { GrHistory } from "react-icons/gr";
import { BiLike } from "react-icons/bi";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const sidebarOpen = useSelector((store) => store.appSlice.sidebarOpen);

  if (!sidebarOpen) return;

  return (
    <div className="h-screen w-60 px-4 py-5 text-lg shadow-2xl dark:bg-slate-900 dark:text-white">
      <ul className="list-none">
        <li className="mb-5 mt-3 flex items-center">
          <MdHomeFilled className="mr-6 text-3xl" />
          Home
        </li>
        <li className="mb-5 flex items-center">
          <SiYoutubeshorts className="mr-6 text-3xl" />
          Shorts
        </li>
        <li className="mb-5 flex items-center">
          <MdSubscriptions className="mr-6 text-3xl" />
          Subscriptions
        </li>
        <li className="mb-5 flex items-center">
          <GrHistory className="mr-6 text-3xl" />
          History
        </li>
        <li className="mb-5 flex items-center">
          <MdOutlineWatchLater className="mr-6 text-3xl" />
          Watch Later
        </li>
        <li className="mb-5 flex items-center">
          <BiLike className="mr-6 text-3xl" />
          Liked Videos
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
