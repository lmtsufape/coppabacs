import api from "@/api/http-common.js";

export async function postEndereco(
  nome, 
  referencia,
  cidade,
  estado,
  municipio
) {
  return await api.post("/endereco", {
    nome,
    referencia,
    cidade,
    estado,
    municipio
  });
}