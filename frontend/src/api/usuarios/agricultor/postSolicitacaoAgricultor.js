import api from "@/api/http-common.js";

export async function postSolicitacaoAgricultor(novoAgricultor ) {
  return await api.post("/agricultor/usuario", novoAgricultor);
}
