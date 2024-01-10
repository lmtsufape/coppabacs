import api from "@/api/http-common.js";

export async function postLogin(username, password) {
  return await api.post("/login", { 
    username: username,
    password: password 
    
  })

}