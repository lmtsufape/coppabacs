import api from "@/api/http-common";

export async function getAgricultorEmail(email){
  return api.get(`/agricultor/e/${email}`)

}