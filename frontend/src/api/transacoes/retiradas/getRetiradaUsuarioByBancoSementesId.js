import api from "@/api/http-common.js";

export async function getRetiradaUsuarioByBancoSementesId(bancoId) {
  return await api.get(`retiradaUsuario/banco/${bancoId}`);
}