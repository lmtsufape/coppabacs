import api from "@/api/http-common.js";

export async function deleteAdmin(id) {
  return await api.delete(`/admin/${id}`);
}