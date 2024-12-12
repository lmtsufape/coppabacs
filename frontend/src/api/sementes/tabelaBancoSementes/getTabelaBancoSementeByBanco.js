import api from "@/api/http-common.js";

export async function getTabelaBancoSementeByBanco(bancoId) {
  return await api.get(`/tabelaBancoSementes/banco/${bancoId}`);
}