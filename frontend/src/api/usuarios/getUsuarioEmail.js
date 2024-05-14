import api from "@/api/http-common";

export async function getUsuarioEmail(email){
  return api.get(`/usuario/e/${email}`)
}