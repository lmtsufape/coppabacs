import api from "@/api/http-common.js";

export async function postUsuario(novoUsuario = {

  email: "",
  senha: "",
  nome: "",
  apelido: "",
  contato: "",
  cpf: "",
  dataNascimento: "",
  sexo: "",
  endereco: {
    estado: "",
    cidade: "",
    bairro: "",
    nome: "",
    numero: "",
    referencia: "",
  },
  bancoId: "",
  conjuge: {
    nome: "",
    sexo: "",
  },
  atividadesRurais: [],
  producaoSementes: {
    cultura: "",
    variedade: "",
    areaPlantada: "",
    previsaoVenda: "",
  }



}) {
  return await api.post("/usuario", novoUsuario);
}
