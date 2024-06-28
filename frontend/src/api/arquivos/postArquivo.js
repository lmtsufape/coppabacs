

import api from "@/api/http-common.js";

import { getStorageItem } from "@/utils/localStore";
const token = getStorageItem("token");


export async function postArquivo(arquvios) {
    const formData = new FormData();
    for (let i = 0; i < arquvios.length; i++) {
      formData.append('file', arquvios[i]);
    }

      const response = await api.post('arquivos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }});
        return response.data;
  };