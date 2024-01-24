import api from "@/api/http-common.js";

export async function getAllSementes() {
  return await api.get("/sementes");
}