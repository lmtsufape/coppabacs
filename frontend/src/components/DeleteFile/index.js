import React, { useState } from 'react';
import api from "@/api/http-common";

const DeleteFile = () => {
  const [fileName, setFileName] = useState('');

  const handleFileDelete = async () => {
    try {
      await api.delete(`arquivos/${fileName}`);
      console.log('Arquivo deletado:', fileName);
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
        placeholder="Digite o nome do arquivo a ser deletado"
      />
      <button onClick={handleFileDelete}>Deletar Arquivo</button>
    </div>
  );
};

export default DeleteFile;
