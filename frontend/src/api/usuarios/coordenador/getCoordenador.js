import api from "@/api/http-common.js";

export async function getCoordenador(id) {
  return await api.get(`/gerente/${id}`);
}