import api from "@/api/http-common.js";

export async function postCoppabacs( newFuncionario) {
  return await api.post("/coppabacs", newFuncionario);
}