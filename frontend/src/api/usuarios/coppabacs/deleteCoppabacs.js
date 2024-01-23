import api from "@/api/http-common.js";

export async function deleteCoppabacs(id) {
  return await api.delete(`/coppabacs/${id}`);
}