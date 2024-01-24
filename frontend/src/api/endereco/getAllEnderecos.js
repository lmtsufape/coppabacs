import api from "@/api/http-common.js";

export async function getAllEnderecos() {
  return await api.get("/endereco");
}