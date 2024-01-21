import api from "@/api/http-common.js";

export async function postLogin(email, senha) {
  console.log(email, senha);
  return await api.post("/login", {
    email, senha
  })
}
