import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Body from "./components/Body";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Body />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
