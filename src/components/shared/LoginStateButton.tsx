import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const initialClasses =
  "text-white text-lg font-medium tracking-wide py-3 px-1.5 relative hover:text-gray-400 group transition-colors duration-300 inline-block";

interface Props {
  className?: string;
}

const LoginStateButton = ({ className = initialClasses }: Props) => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  return user !== null ? (
    <button className={className} onClick={logout}>
      Logout
    </button>
  ) : (
    <button className={className} onClick={() => navigate("/sign-in")}>
      Sign In
    </button>
  );
};

export default LoginStateButton;
