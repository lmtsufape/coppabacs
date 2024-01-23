import api from "@/api/http-common.js";

export async function postConjuge(nome, sexo) {
  return await api.post("/conjuge", {
    nome,
    sexo
  });
}