import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = () => {
  const { token } = useAuth();

  return token != null ? <Outlet /> : <Navigate to={"/sign-in"} />;
};

export default ProtectedRoutes;
