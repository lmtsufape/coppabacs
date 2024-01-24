import api from "@/api/http-common.js";

export async function deleteEndereco(id) {
  return await api.delete(`/endereco/${id}`);
}