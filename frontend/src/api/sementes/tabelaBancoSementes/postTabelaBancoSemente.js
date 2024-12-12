import api from "@/api/http-common.js";

export async function postTabelaBancoSemente(listTabelasBancoSementes) {
  return await api.post("/tabelaBancoSementes/all", listTabelasBancoSementes);
}