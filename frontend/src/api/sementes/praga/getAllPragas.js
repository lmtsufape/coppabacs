import api from "@/api/http-common.js";

export async function getAllPragas() {
  return await api.get("/praga");
}