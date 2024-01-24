import api from "@/api/http-common.js";

export async function deleteAgricultor(id) {
  return await api.delete(`/agricultor/${id}`);
}