import api from "@/api/http-common.js";

export async function postRecoverPassword(token, novaSenha) {
  return await api.post(`/recoverpassword/${token}`, novaSenha );
}