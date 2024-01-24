import api from "@/api/http-common.js";

export async function getEndereco(id) {
  return await api.get(`/endereco/${id}`);
}