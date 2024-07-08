import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ErrorPage from "./components/ErrorPage";
import WatchPage from "./components/WatchPage";
import { TbLoader3 } from "react-icons/tb";

const Layout = ({ children }) => {
  const hasCookie = Cookies.get("userCookie");
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasCookie) {
      navigate("/");
    }
  }, [hasCookie, navigate]);

  if (!hasCookie) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-[100px] text-white">
        <TbLoader3 />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/watch"
          element={
            <Layout>
              <WatchPage />
            </Layout>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
