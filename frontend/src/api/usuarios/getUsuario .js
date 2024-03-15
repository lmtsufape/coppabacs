import api from "@/api/http-common";

export async function getUsuario(id){
  return api.get(`/usuario/${id}`)
}