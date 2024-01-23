import api from "@/api/http-common.js";

export async function deletePraga(id) {
  return await api.delete(`/praga/${id}`);
} 