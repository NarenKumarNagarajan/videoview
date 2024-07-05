import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
/* import { FaUserCircle } from "react-icons/fa"; */
import { MdLightMode } from "react-icons/md";
import logo from "../images/logo.png";
import { darkModeControl, sidebarShow } from "../redux/appSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.appSlice.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const logoutHandle = () => {
    Cookies.remove("userCookie");
    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-row items-center justify-between bg-white px-6 py-4 dark:bg-slate-900">
      <div className="flex items-center">
        <GiHamburgerMenu
          className="h-6 w-6 cursor-pointer dark:text-white"
          onClick={() => dispatch(sidebarShow())}
        />
        <img src={logo} alt="logo" className="ml-8 h-12" />
      </div>
      <div className="flex items-center justify-center">
        <input
          type="search"
          placeholder="search"
          className="rounded-l-full border-2 border-r-0 border-gray-400 px-2 py-1 focus:outline-0 md:w-[200px] lg:w-[500px]"
        />
        <button className="rounded-r-full border-2 border-gray-400 bg-gray-100 px-2 py-0">
          <CiSearch className="h-8 w-8" />
        </button>
      </div>
      <div className="flex items-center">
        <MdLightMode
          className="mr-10 h-6 w-6 cursor-pointer dark:text-white"
          onClick={() => dispatch(darkModeControl())}
        />
        <button
          className="rounded-full bg-black px-3 py-2 font-bold text-white dark:bg-white dark:text-black"
          onClick={logoutHandle}
        >
          Logout
        </button>
        {/* <FaUserCircle className="h-10 w-10 cursor-pointer dark:text-white" /> */}
      </div>
    </div>
  );
};

export default Header;
