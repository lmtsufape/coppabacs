import api from "@/api/http-common.js";

export async function deleteCoordenador(id) {
  return await api.delete(`/gerente/${id}`);
}