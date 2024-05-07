import api from "@/api/http-common.js";

export async function getSementesBanco(idBanco) {
  return await api.get(`/sementes/banco/${idBanco}`);
}