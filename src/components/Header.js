import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
/* import { FaUserCircle } from "react-icons/fa"; */
import { MdLightMode } from "react-icons/md";
import logo from "../images/logo.png";
import { SEARCH_URL } from "../utils/globalConstants";

import { saveSearchCache } from "../redux/searchSlice";
import { darkModeControl, sidebarShow } from "../redux/appSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.appSlice.darkMode);
  const searchCache = useSelector((state) => state.searchSlice);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const timer = setTimeout(() => {
      searchCache[searchQuery]
        ? setSuggestions(searchCache[searchQuery])
        : getSearchSuggestions();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode, searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(SEARCH_URL + searchQuery);
    const data = await response.json();
    setSuggestions(data[1]);
    if (searchQuery !== "") {
      dispatch(saveSearchCache({ [searchQuery]: data[1] }));
    }
  };

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
        <Link to="/dashboard">
          <img src={logo} alt="logo" className="ml-8 h-12 cursor-pointer" />
        </Link>
      </div>
      <div className="relative">
        <div className="flex items-center justify-center">
          <input
            type="search"
            placeholder="search"
            className="rounded-l-full border-2 border-r-0 border-gray-400 px-2 py-1 focus:outline-0 md:w-[200px] lg:w-[500px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="rounded-r-full border-2 border-gray-400 bg-gray-100 px-2 py-0">
            <CiSearch className="h-8 w-8" />
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute z-50 w-[500px] rounded-b-lg border-2 border-gray-100 bg-white">
            <ul>
              {suggestions.map((result, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center px-4 py-2 hover:bg-slate-200"
                >
                  <CiSearch className="mr-2 h-4 w-4" /> {result}
                </li>
              ))}
            </ul>
          </div>
        )}
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
