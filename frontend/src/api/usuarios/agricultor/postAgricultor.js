import api from "@/api/http-common.js";

export async function postAgricultor(novoAgricultor = {
  nome: "",
  cpf: "",
  email: "",
  contato: "",
  endereco: {
    nome: "",
    referencia: "",
    cidade: "",
    estado: "",
    municipio: ""
  },
  senha: "",
  rg: "",
  nomeMae: "",
  nomePai: "",
  tituloEleitor: "",
  sexo: ""
}) {
  return await api.post("/agricultor", novoAgricultor);
}
