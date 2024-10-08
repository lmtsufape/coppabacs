import api from "@/api/http-common.js";

export async function deletePublicacao(id){
    return await api.delete(`/post/${id}`);
}