import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AuthLayout = () => {
  const { token } = useAuth();

  return token === null ? <Outlet /> : <Navigate to={"/"} />;
};

export default AuthLayout;
