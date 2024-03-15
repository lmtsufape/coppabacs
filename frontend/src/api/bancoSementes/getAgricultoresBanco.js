import api from '@/api/http-common'

export async function getAllAgricultoresBanco() {
  return await api.get(`/banco-sementes/${id}/agricultores`); 
}