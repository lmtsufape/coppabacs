import api from "@/api/http-common.js";

export async function getAllPublicacoes() {
  return await api.get("/post")
}