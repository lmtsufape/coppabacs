import api from "@/api/http-common.js";

export async function postAgricultor(novoAgricultor ) {
  return await api.post("/agricultor", novoAgricultor);
}
