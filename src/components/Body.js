import useVerifyLogin from "../hooks/useVerifyLogin";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  const loginStatus = useVerifyLogin();

  return !loginStatus ? (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <MainContainer />
      </div>
    </>
  ) : (
    loginStatus
  );
};

export default Body;
