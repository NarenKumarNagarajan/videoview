import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import background from "../images/background.jpg";
import logo from "../images/logo.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { CAPTCHA_VALUE, COOKIE_TIME } from "../utils/globalConstants";
import useVerifyLogin from "../hooks/useVerifyLogin";

const Login = () => {
  const loginStatus = useVerifyLogin();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const formValidation = async () => {
    if (userName !== "user") {
      setErrorMessage("Username is wrong");
    } else if (password !== "user@1234") {
      setErrorMessage("Password is wrong");
    } else if (CAPTCHA_VALUE !== Number(captcha)) {
      setErrorMessage("Captcha Wrong. Please try again.");
    } else {
      const data = { userName, password };
      const jsonData = JSON.stringify(data);

      Cookies.set("userCookie", jsonData, {
        expires: COOKIE_TIME,
      });

      navigate("/dashboard", { replace: true });
    }
  };

  return !loginStatus ? (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <img src={logo} alt="logo" className="mb-5 h-16" />
      <form
        className="flex flex-col items-center rounded-xl bg-black p-6"
        onClick={(e) => e.preventDefault()}
      >
        <h1 className="mb-4 text-center text-2xl font-bold text-white">
          LOGIN TO YOUR ACCOUNT
        </h1>
        {errorMessage && (
          <p className="mb-4 w-full rounded-lg border border-red-500 bg-white p-1 text-center font-bold text-red-500">
            Error : {errorMessage}
          </p>
        )}
        <input
          type="text"
          placeholder="Enter your username"
          className="mb-4 w-full rounded-lg p-2 focus:border-0 focus:outline-0"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          autoFocus
        />
        <div className="relative mb-5 w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full rounded-lg p-2 focus:border-0 focus:outline-0"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </button>
        </div>
        <div className="flex flex-row justify-between">
          <input
            type="number"
            placeholder="Enter Captcha"
            className="mb-4 w-2/3 rounded-lg p-2 focus:border-0 focus:outline-0"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            min={0}
            max={9999}
          />
          <input
            type="number"
            className="mb-4 w-1/4 rounded-lg border-0 bg-white text-center text-xl font-bold text-red-600 focus:border-0 focus:outline-0"
            value={CAPTCHA_VALUE}
            readOnly
          />
        </div>
        <button
          type="submit"
          className="mb-5 rounded-lg bg-white px-4 py-2 text-lg font-bold"
          onClick={formValidation}
        >
          SUBMIT
        </button>
        <div className="font-bold text-white">Username: user</div>
        <div className="font-bold text-white">Password: user@1234</div>
      </form>
    </div>
  ) : (
    loginStatus
  );
};

export default Login;
