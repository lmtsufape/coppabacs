import api from "@/api/http-common.js";

export async function patchCoppabacs(atualizacaoUsuario, usuarioId) {
  return await api.patch(`/coppabacs/${usuarioId}`,atualizacaoUsuario);
}
