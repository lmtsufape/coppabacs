import api from "@/api/http-common.js";

export async function getDoacaoId(idDoacao) {
  return await api.get(`/doacaoUsuario/${idDoacao}`);
}