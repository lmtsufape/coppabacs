import api from "@/api/http-common.js";

export async function getAdmin(id) {
  return await api.get(`/admin/${id}`);
}