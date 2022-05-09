/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function divisao(dividendo, divisor) {
  let resultado = dividendo / divisor;
  let resto = dividendo % divisor
  console.log(`O resultado da divisão: ${dividendo} / ${divisor} é ${resultado},\nE o resto dessa divisão é ${resto}`);
};

divisao(7, 2);