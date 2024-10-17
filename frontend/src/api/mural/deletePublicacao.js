import api from "@/api/http-common.js";

export async function deletePublicacao(id){
    if (typeof id !== 'string' && typeof id !== 'number') {
        throw new Error('ID deve ser uma string ou número');
    }
    return await api.delete(`/post/${id}`);
}