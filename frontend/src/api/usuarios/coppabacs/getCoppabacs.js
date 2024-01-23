import api from "@/api/http-common.js";

export async function getCoppabacs(id) {
  return await api.get(`/coppabac/${id}`);
}