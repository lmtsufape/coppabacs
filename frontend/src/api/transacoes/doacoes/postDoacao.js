import api from "@/api/http-common.js";

export async function postDoacao(newDoacao) {
  return await api.post("doacaoUsuario", newDoacao);
}