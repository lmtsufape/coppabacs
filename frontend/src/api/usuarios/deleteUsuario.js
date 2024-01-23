import api from "@/api/http-common.js";

export async function deleteUsuario(id) {
  return await api.delete(`/usuario/${id}`);
}