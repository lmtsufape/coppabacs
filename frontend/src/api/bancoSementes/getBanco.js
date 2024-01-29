import api from '@/api/http-common'

export async function getBanco(id) {
  return await api.get(`/banco-sementes/${id}`);
}