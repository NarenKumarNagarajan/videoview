import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import ErrorPage from "./components/ErrorPage";

import useVerifyLogin from "./hooks/useVerifyLogin";

const Layout = ({ children }) => {
  const loginStatus = useVerifyLogin();

  return !loginStatus ? (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>
  ) : (
    loginStatus
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
              <MainContainer />
            </Layout>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
