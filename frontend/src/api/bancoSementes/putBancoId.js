import api from '@/api/http-common'
import { getStorageItem } from "@/utils/localStore";
const token = getStorageItem("token");

export async function putBancoId( atualizacaoBanco , bancoId) {
  return await api.put(`/banco-sementes/${bancoId}`, atualizacaoBanco, {	headers: { 'Authorization': `${token}` } });
}