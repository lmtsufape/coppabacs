import api from "@/api/http-common.js";

export async function getAllUsuarios() {
  return await api.get("/usuario");
}
