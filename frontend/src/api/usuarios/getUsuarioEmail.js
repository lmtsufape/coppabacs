import api from "@/api/http-common";

export async function getUsuarioEmail(email){
  return api.get(`/agricultor/e/${email}`)
}