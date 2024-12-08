import api from "@/api/http-common.js";

export async function refuseAgricultor(id) {
  return await api.delete(`agricultor/recusar/${id}`);
}