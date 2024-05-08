import api from "@/api/http-common.js";

export async function postRetirada(newRetirada) {
  return await api.post("/retiradaUsuario", newRetirada);
}