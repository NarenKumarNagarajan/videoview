import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { TbLoader3 } from "react-icons/tb";

const useVerifyLogin = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const hasCookie = Cookies.get("userCookie");

    if (!hasCookie) {
      setLoading(false);
      navigate("/");
    } else {
      setLoading(false);
      navigate("/dashboard");
    }
  }, [navigate]);

  return loading ? (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-[100px] text-white">
      <TbLoader3 />
    </div>
  ) : (
    false
  );
};

export default useVerifyLogin;
