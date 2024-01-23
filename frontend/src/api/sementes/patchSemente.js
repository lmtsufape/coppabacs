import api from  "@/api/http-common.js";

export async function patchSemente(
  id,
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
  tabelaBancoSementes) {
   return await api.patch(`/semente/${id}`, {
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