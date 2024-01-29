import api from "@/api/http-common.js";

export async function postAgricultor(
  nome,
  email, 
  senha,
  endereco= {
    nome: "",
    referencia: "",
    cidade: "",
    estado: "",
    municipio: ""
  },
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
) {
  return await api.post("/agricultor", {
    nome,
    email, 
    senha,
    endereco: {
      nome: endereco.nome,
      referencia: endereco.referencia,
      cidade: endereco.cidade,
      estado: endereco.estado,
      municipio: endereco.municipio
    },
    rg,
    cpf,
    dataNascimento,
    contato,
    imagem,
    nomePai,
    nomeMae,
    nis,
    tituloEleitor,
    sexo  
  });
}
