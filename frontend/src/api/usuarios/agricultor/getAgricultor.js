import api from "@/api/http-common.js";

export async function getAgricultor(id) {
  return await api.get(`/agricultor/${id}`)
}