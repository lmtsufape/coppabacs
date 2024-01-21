import api from "@/api/http-common.js";

export async function postValidateToken(token) {
  console.log("Chama", token);
  return await api.post("/validate-token", {
    token
  })
}