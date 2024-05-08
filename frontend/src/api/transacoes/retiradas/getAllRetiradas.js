import api from "@/api/http-common.js";

export async function getAllRetiradas() {
  return await api.get("/retiradaUsuario");
}