import api from "@/api/http-common.js";

export async function getUsuario(id) {
  return await api.get(`/usuario/${id}`);
}