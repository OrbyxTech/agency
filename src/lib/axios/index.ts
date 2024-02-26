import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_SERVER_BASE_URL!,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
