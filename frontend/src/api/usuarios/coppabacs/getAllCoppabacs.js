import api from "@/api/http-common.js";

export async function getAllCoppabacs() {
  return await api.get("/coppabac");
}