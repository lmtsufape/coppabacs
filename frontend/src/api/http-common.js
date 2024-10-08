import { removeStorageItem } from "@/utils/localStore";
import axios from "axios";

export const baseURL = "http://localhost:8081/api/v1"

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json"
  }
});


api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {

    }
    return Promise.reject(error);
  }
);

api.interceptors.request.use((request) => {
  let token = localStorage.getItem("APPKEY_token");
  if (token == null) 
    return request;
  if(typeof token === "string") {
    console.log("token:" + token.replace(/["]/g, ''));
    token = token.replace(/["]/g, '');
    console.log("token:" + token);
    console.log("size token:" + token.length );
    if(token.length != 0)
      request.headers.Authorization = token;
    else
      request.headers.Authorization = null;
  }
  return request; 
});

export default api;