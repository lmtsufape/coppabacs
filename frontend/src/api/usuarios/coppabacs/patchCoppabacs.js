import api from "@/api/http-common.js";

export async function patchCoppabacs(id,
  nome,
  email, 
  senha,
  endereco,
  rg,
  cpf,
  dataNascimento,
  contato,
  imagem,
  nomePai,
  nomeMae,
  nis,
  tituloEleitor,
  sexo,
  conjuge) {
  return await api.patch(`/coppabacs/${id}`,{
    nome,
    email, 
    senha,
    endereco,
    rg,
    cpf,
    dataNascimento,
    contato,
    imagem,
    nomePai,
    nomeMae,
    nis,
    tituloEleitor,
    sexo,
    conjuge
  });
}