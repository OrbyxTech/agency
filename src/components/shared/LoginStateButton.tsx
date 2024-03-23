import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const initialClasses =
  "text-white text-lg font-medium tracking-wide py-3 px-1.5 relative hover:text-gray-400 group transition-colors duration-300 inline-block";

interface Props {
  className?: string;
}

const LoginStateButton = ({ className = initialClasses }: Props) => {
  const [t] = useTranslation();
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  return user !== null ? (
    <button className={className} onClick={logout}>
      {t("auth.login-state-component.logged-in")}
    </button>
  ) : (
    <button className={className} onClick={() => navigate("/sign-in")}>
      {t("auth.login-state-component.not-logged-in")}
    </button>
  );
};

export default LoginStateButton;
