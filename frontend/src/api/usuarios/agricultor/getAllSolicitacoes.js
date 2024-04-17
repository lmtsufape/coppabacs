import api from "@/api/http-common.js";

export async function getAllSolicitacoes() {
  return await api.get("/agricultor/usuarios")
}