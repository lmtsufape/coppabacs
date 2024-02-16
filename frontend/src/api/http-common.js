import { removeStorageItem } from "@/utils/localStore";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      removeStorageItem('token');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);
export default api;