import api from "@/api/http-common.js";

export async function validarAgricultor(id) {
  return await api.patch(`agricultor/validar/${id}`);
}
//ver com o back como funciona esse validar