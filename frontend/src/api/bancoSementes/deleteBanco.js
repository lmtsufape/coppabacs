import api from '@/api/http-common'

export async function deleteBanco(id) {
  return await api.delete(`/banco-sementes/${id}`);
}