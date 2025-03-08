import api from "@/api/http-common.js";

import { getStorageItem } from "@/utils/localStore";
const token = getStorageItem("token");

export async function deleteArquivo(filename) {
    try {
        const response = await api.delete(`arquivos/${filename}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}