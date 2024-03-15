import api from "@/api/http-common";

export async function getAllUsuarios(){
  return api.get("/usuario")
}