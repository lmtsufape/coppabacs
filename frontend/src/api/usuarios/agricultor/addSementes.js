import api from "@/api/http-common.js";


export async function addSementesAgricultor(id,sementes) {
  return await api.post(`agricultor/${id}/adicionar-sementes`,sementes);
}