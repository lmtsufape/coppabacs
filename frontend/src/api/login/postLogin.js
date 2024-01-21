import api from "@/api/http-common.js";

export async function postLogin(email, senha) {
  console.log("aaaaaaaaaaaaaaaaaaaaaaaa ", email, senha);
  return await api.post("/login", {
    email, senha
  }, {
    timeout: 3000,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": 'Content-Type, Authorization'
    }
  })
}
