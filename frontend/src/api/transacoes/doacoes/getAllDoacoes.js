import api from "@/api/http-common.js";

export async function getAllDoacoes() {
  return await api.get("doacaoUsuario");
}