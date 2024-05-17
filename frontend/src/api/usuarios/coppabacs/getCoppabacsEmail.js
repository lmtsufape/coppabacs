import api from "@/api/http-common.js";

export async function getCoppabacsEmail(email) {
  return await api.get(`/coppabacs/e/${email}`);
}