import React, { useState } from 'react';
import api from "@/api/http-common";

const DownloadFile = () => {
    const [fileName, setFileName] = useState('');
  
    const handleFileDownload = async () => {
      try {
        const response = await api.get(`arquivos/${fileName}`, {
          responseType: 'blob',
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        console.error('Erro deletando arquivo:', error);
      }
    };
  
    return (
      <div>
        <input
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="Digite o nome do arquivo a ser baixado"
        />
        <button onClick={handleFileDownload}>Baixar Arquivo</button>
      </div>
    );
  };
  
  export default DownloadFile;