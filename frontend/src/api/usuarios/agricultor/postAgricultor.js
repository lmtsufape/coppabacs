import api from "@/api/http-common.js";

export async function postAgricultor(
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
  return await api.post("/agricultor", {
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
  })
}