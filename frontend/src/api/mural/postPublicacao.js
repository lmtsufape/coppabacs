import api from "@/api/http-common.js";

export async function postPublicacao(novaPublicacao ) {
  return await api.post("/post", novaPublicacao);
}
