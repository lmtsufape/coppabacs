import api from "@/api/http-common.js";

export async function getCoordenadorEmail(email) {
  return await api.get(`/gerente/e/${email}`);
}