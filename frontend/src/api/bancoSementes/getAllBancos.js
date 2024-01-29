import api from '@/api/http-common'

export async function getAllBancos() {
  return await api.get("/banco-sementes");
}