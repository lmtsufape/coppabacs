import api from "@/api/http-common.js";

export async function postTabelaBancoSemente(novaSemente) {
  return await api.post("/tabelaBancoSementes/all", novaSemente.sementes);
}