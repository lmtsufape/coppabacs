import api from '@/api/http-common'

export async function postBanco(novoBanco = {
  nome: "",
  comunidade: "",
  anoFundacao: "",
  historiaBanco: "",
  variedadesTrabalhadas: "",
  endereco: {
    nome: "",
    referencia: "",
    cidade: "",
    estado: "",
    cep: "",
    numero: "",
    bairro: ""
  },
  objetos: {
    bombona: "",
    peneiraSelecao: "",
    balanca: "",
    armario: "",
    plantadeira: "",
    lona: "",
    batedeiraCereal: "",
  },

}
) {
  return await api.post("/banco-sementes", novoBanco);
}