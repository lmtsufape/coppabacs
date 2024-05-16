import api from "@/api/http-common.js";

export async function patchCoordenador(newData, id) {
  return await api.patch(`/gerente/${id}`, newData);
}