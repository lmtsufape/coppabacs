import api from "@/api/http-common.js";

export async function postAgricultor(novoAgricultor ={
  
  email: "",
  senha: "",
  confirmarSenha: "",
  nome: "",
  apelido: "",
  contato: "",
  cpf: "",
  dataNascimento: "",
  sexo: "",
  endereco: {
    estado: "",
    cidade: "",
    bairro: "",
    nome: "",
    numero: "",
    referencia: "",
  }, 
  bancoId: "",
  
}, token) {
  return await api.post("/agricultor", novoAgricultor, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  });
}
