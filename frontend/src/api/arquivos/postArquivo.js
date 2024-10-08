

import api from "@/api/http-common.js";

import { getStorageItem } from "@/utils/localStore";
const token = getStorageItem("token");


export async function postArquivo(arquivos) {
    const formData = new FormData();
    if(isIterable(arquivos)) {
      for(let arq of arquivos) {
        formData.append('file', arq);
      }
    } else
      formData.append('file', arquivos); 

      
      console.log(formData);
      console.log(arquivos);
      await new Promise(r => setTimeout(r, 30));
    try {
      const response = await api.post('arquivos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }});
        return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  function isIterable(obj) {
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
  }