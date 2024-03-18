export const dateMask = (value) => {
  if(value){
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d)/, '$1/$2') // captura 2 numeros e coloca uma barra
      .replace(/(\d{2})(\d)/, '$1/$2') // captura 2 numeros e coloca uma barra
      .replace(/(\d{4})\d+?$/, '$1') // captura 4 numeros e coloca um traço
  }else{
    return "";
  }
}