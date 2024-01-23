import api from "@/api/http-common.js";

export async function getPragas(id) {
  return await api.get(`/praga/${id}`);
}