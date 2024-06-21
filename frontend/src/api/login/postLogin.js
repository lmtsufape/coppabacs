import api from "@/api/http-common.js";

export async function postLogin(cpf, senha){
  return await api.post("/login", {
    cpf, senha
  })
}
