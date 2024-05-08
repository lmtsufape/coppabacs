import api from "@/api/http-common.js";

export async function getRetiradaId(idRetirada) {
  return await api.get(`/retiradaUsuario/${idRetirada}`);
}