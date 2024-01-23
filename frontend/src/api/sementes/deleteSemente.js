import api from "@/api/http-common.js";

export async function deleteSemente(id) {
  return await api.delete(`/semente/${id}`);
}