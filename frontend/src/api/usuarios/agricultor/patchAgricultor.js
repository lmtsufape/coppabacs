import api from "@/api/http-common.js";

export async function patchAgricultor(atualizacaoUsuario, usuarioId) {
  return await api.put(`/agricultor/${usuarioId}`,atualizacaoUsuario);
}