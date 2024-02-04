import api from "@/api/http-common.js";

export async function getAllAgricultores(token) {
  return await api.get("/usuario", {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  });
}