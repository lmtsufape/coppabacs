import api from "@/api/http-common.js";

export async function postLogin(email, senha) {
  return await api.post("/login", {
    email, senha
  })
}
