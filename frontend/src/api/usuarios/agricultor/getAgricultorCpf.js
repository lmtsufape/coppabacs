import api from "@/api/http-common";

export async function getAgricultorCpf(cpf){
  return api.get(`/agricultor/cpf/${cpf}`)

}