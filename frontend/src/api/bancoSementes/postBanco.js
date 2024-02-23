import api from '@/api/http-common'

export async function postBanco(
  nome,
  comunidade,
  anoFundação,
  historia,
  variedadesTrabalhadas,
  endereco
) {
  return await api.post("/banco-sementes", {
    nome,
    comunidade,
    anoFundação,
    historia,
    variedadesTrabalhadas,
    endereco
  });
}