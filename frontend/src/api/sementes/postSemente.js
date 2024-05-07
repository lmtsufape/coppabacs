import api from "@/api/http-common.js";

export async function postSemente(novaSemente) {
  return await api.post("/sementes", novaSemente);
}