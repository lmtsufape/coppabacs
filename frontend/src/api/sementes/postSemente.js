import api from "@/api/http-common.js";

export async function postSemente(novaSemente = {
  responsavelTecnico: {
    nome: "",
    cpf: "",
    numeroConselho: "",
    conselho: "",
  },

  cultura: {
    cultura: "",
    genero: "",
  },

  nome: "",
  nomePopular: "",
  descricao: "",
  pragas: "",
  dominioPublico: "",
  polinizaacaoAbertaMelhorada: "",
  regiaoColetaDados: "",
  altitudeMaxima: "",
  altitudeMinima: "",
  caracteristicasPositiva: "",
  caracteristicasNegativas: "",
  doencas: "",



  toleranciaAdversidades: {
    altaTemperatura: "",
    baixaTemperatura: "",
    geada: "",
    chuvaExcessiva: "",
    seca: "",
    ventos: "",
    salinidade: "",
    toxidadeAluminio: "",
    soloArgiloso: "",
    soloArenoso: "",
    soloAcido: "",
    soloBaixaFertilidade: "",
  },

  finalidades: [],

  regioesAdaptacaoCultivo: [
    { regiao: "Pindorama" },
    { regiao: "Casa do Cacete" }
  ],

  caracteristicasAgronomicas: {
    cicloFenologico: "",
    standRecomendado: "",
    produtividade: "",
    altitudePlanta: "",
    pesoMilGraos: "",
    pesoHectolitro: "",
    tipoGrao: "",
    corGrao: "",
    corCaule: "",
    corFolha: "",
    corFlor: "",
    habitoCrescimento: "",

    empalhamento: {
      tipo: "",
    }
  },
}

) {
  return await api.post("/sementes", novaSemente);
}