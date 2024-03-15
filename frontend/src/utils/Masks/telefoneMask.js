export const telefoneMask = (value) => {
  if(value){
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d)/, '($1) $2') // captura 2 numeros e coloca um parênteses
      .replace(/(\d{5})(\d)/, '$1-$2') // captura 5 numeros e coloca um traço
      .replace(/(-\d{4})\d+?$/, '$1') // captura 4 numeros e coloca um traço
  }else{
    return "";
  }
}