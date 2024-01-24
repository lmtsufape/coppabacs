import api from "@/api/http-common.js";

export async function getSementes(id) {
  return await api.get(`/semente/${id}`);
}