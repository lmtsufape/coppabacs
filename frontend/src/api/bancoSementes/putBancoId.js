import api from '@/api/http-common'

export async function putBancoId( atualizacaoBanco , bancoId) {
  return await api.put(`/banco-sementes/${bancoId}`, atualizacaoBanco);
}