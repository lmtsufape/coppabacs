import api from "@/api/http-common.js";

export async function deleteEndereco(
  id,
  nome, 
  referencia,
  cidade,
  estado,
  municipio
  ) {
  return await api.delete(`/endereco/${id}`,{
    nome, 
    referencia,
    cidade,
    estado,
    municipio
  });
}