import api from "@/api/http-common.js";

export async function postForgot(cpf, pergunta, resposta) {
    return await api.post(`/forgot/${cpf}`, pergunta, resposta );

}