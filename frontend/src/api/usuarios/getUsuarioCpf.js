import api from "@/api/http-common";

export async function getUsuarioCpf(cpf){
  return api.get(`/usuario/cpf/${cpf}`)

}