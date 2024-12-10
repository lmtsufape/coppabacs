import api from  "@/api/http-common.js";

export async function patchSemente(newData, id) {
   return await api.patch(`/sementes/${id}`,newData)  };