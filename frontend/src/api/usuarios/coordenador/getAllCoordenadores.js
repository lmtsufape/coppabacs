import api from "@/api/http-common.js";

export async function getAllCoordenadores() {
  return await api.get("/gerente")
}