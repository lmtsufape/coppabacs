import api from "@/api/http-common";

export async function getCurrentUser(){
  return api.post(`/user/current`)
}