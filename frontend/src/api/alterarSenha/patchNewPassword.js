import api from "@/api/http-common.js";

export async function patchNewPassword(senha, novaSenha) {
    return await api.patch(`/newpassword`, {
        senha: senha,
        novaSenha: novaSenha,
    });
}