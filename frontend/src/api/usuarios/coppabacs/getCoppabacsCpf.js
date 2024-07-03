import api from "@/api/http-common.js";

export async function getCoppabacsCpf(cpf) {
  return await api.get(`/coppabacs/cpf/${cpf}`);
}