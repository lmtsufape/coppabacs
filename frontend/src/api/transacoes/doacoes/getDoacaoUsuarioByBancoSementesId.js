import api from "@/api/http-common.js";

export async function getDoacaoUsuarioByBancoSementesId(bancoId) {
  return await api.get(`doacaoUsuario/banco/${bancoId}`);
}