import api from "@/api/http-common.js";

export async function removeSementesAgricultor(id,sementes) {
    return await api.post(`agricultor/${id}/remover-sementes`,sementes);
  }