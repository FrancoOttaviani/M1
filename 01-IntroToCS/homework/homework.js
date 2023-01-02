'use strict';

function BinarioADecimal(num) {
   let binarioAstring = num.toString()
   let potencia = 0;
   let resultado = 0;
   
   for (let index = binarioAstring.length; index >= 0 ; index--) {
      if(binarioAstring[index -1] == 1){
         resultado = resultado + Math.pow(2, potencia); 
         potencia ++
      }else{
         potencia += 1;
      }
      
   }
   
   return resultado
}

function DecimalABinario(num) {
   let resultado = num;
   let binario = [];
   while(resultado >= 1){
      binario.push(resultado%2);
      resultado = (resultado - (resultado%2))/2;
   }
   return binario.reverse().join("");
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
