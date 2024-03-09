import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use(
  (config) => {
    // Get the token from local storage or wherever you store it
    const token = localStorage.getItem("authToken");
    // If the token exists, add it to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Axios;
