

import api from "@/api/http-common.js";


export async function getArquivo(imagesName) {
    const response = await api.get(`/arquivos/${imagesName}`, {
        responseType: 'blob', // Important for handling binary data
       
      });

      const url = URL.createObjectURL(new Blob([response.data]));
      return url
  };