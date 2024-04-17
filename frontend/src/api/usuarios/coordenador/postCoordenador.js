import api from "@/api/http-common.js";

export async function postCoordenador( newCoordenador) {
  return await api.post("/gerente", newCoordenador)
}