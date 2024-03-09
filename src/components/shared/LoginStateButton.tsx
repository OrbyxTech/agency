import React from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const LoginStateButton = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  return user !== null ? (
    <button
      className="text-white text-lg font-medium tracking-wide py-3 px-1.5 relative hover:text-gray-400
  group transition-colors duration-300 inline-block"
      onClick={logout}
    >
      Logout
    </button>
  ) : (
    <button
      className="text-white text-lg font-medium tracking-wide py-3 px-1.5 relative hover:text-gray-400
  group transition-colors duration-300 inline-block"
      onClick={() => navigate("/sign-in")}
    >
      Sign In
    </button>
  );
};

export default LoginStateButton;
