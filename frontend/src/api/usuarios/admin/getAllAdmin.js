import api from "@/api/http-common.js";

export async function getAllAdmin() {
  return await api.get("/admin")
}