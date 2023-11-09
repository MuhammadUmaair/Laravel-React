import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(function (config) {
  const authToken = localStorage.getItem("auth_token");
  config.headers.Authorization = authToken ? `Bearer ${authToken}` : "";
  return config;
});

export default axiosInstance;
