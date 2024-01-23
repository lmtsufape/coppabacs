import api from "@/api/http-common.js";

export async function postUsuario(
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
  return await api.post("/usuario", {
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