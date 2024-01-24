import api from "@/api/http-common.js";

export async function getAllConjuge(id) {
  return await api.get(`/conjuge/${id}`);
}