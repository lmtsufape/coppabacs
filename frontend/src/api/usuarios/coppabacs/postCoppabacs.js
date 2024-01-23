import api from "@/api/http-common.js";

export async function postCoppabacs(
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
) {
  return await api.post("/coppabac", {
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