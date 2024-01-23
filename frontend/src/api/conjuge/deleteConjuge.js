import api from "@/api/http-common.js";

export async function deleteConjuge(id) {
  return await api.delete(`/gerente/${id}`);
}