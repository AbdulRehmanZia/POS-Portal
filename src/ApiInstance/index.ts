// src/utils/api.ts
import axios from "axios";
import { getToken } from "../middleware/TokenDecode";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1", 
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
