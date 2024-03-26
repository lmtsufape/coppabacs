import api from '@/api/http-common'

export async function getAllAgricultoresBanco(id) {
  return await api.get(`/banco-sementes/${id}/agricultores`); 
}