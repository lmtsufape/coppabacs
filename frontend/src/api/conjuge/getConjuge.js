import api from "@/api/http-common.js";

export async function getConjuge(id) {
  return await api.get(`/conjuge/${id}`);
}