import api from '@/api/http-common'

export async function patchBanco(
  nome,
  comunidade,
  anoFundação,
  historia,
  variedadesTrabalhadas,
  endereco
) {
  return await api.patch("/banco-sementes", {
    nome,
    comunidade,
    anoFundação,
    historia,
    variedadesTrabalhadas,
    endereco
  });
}