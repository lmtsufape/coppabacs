export const cpfMask = (value) => {
  if(value){
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 3 numeros e coloca um ponto
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 3 numeros e coloca um ponto
      .replace(/(\d{3})(\d{1,2})/, '$1-$2') // captura 3 numeros e coloca um traço
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros e coloca um traço
  }else{
    return "";
  }
};