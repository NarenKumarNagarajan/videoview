import { Link } from "react-router-dom";

import errorImage from "../images/errorImage.png";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-6 text-xl font-bold">
      <div className="text-center">
        <img src={errorImage} alt="errorImg" className="mx-auto w-72" />
        <p>
          This page isn't available. You can visit{" "}
          <Link to="/dashboard" className="text-blue-700 underline">
            Home Page
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
