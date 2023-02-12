const removeFromArray = function(...args) {
    let arrayP = arguments[0];
    let nDelete = [...args];

       for (let i = 0; i < arrayP.length; i++) {
        for (let j = 0; j < nDelete.length; j++) {
          if (nDelete.includes(arrayP[i])){
            arrayP.splice(i,1);
          }
         }
        }
      return arrayP;
    
      /*
        argumento array + valores a eliminar

        1- guarda a 1 posicao dos argumentos (array a comparar)
        2- guarda os valores a comparar na variavel nDelete (os restantes argumentos)
        3- Percorre o arrayP  e compara com cada posicao do arrayP nDelete 
            se o item do nDelete incluir na posicao do arrayP elimina essa mesma posicao do arrayP 
            se nao volta passa ha procima posicao do nDelete
        4- Quando Percorrer o nDelete todo passa ha proxima posicao do arrayP e volta a fazer o ciclo ao nDelete , a verificacao e elimina se for o caso

      */
  
};

// Do not edit below this line
module.exports = removeFromArray;
