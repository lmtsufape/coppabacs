import api from "@/api/http-common.js";

export async function postSemente(
  nome,
  descricao,
  imagem,
  localOrigem,
  dominioPublico,
  polinizaacaoAbertaMelhorada,
  tempoComunidade,
  regiaoColetaDados,
  altitudeMaxima,
  altitudeMinima,
  caracteristicasPositiva,
  caracteristicasNegativas,
  toleranciaAdversidades,
  producaoSementes,
  tabelaBancoSementes
) {
  return await api.post("/semente", {
    nome,
    descricao,
    imagem,
    localOrigem,
    dominioPublico,
    polinizaacaoAbertaMelhorada,
    tempoComunidade,
    regiaoColetaDados,
    altitudeMaxima,
    altitudeMinima,
    caracteristicasPositiva,
    caracteristicasNegativas,
    toleranciaAdversidades,
    producaoSementes,
    tabelaBancoSementes
  });
}