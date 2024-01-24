import api from "@/api/http-common.js";

export async function getAllAgricultores() {
  return await api.get("/agricultor")
}