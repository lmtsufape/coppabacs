import api from "@/api/http-common.js";

export async function patchConjuge(id, nome, sexo) {
  return await api.patch(`/conjuge/${id}`, {
    nome: nome,
    sexo: sexo
  });
}