/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo). */

function triangle(sideOne, sideTwo, sideThree) {
  if(sideOne == sideTwo && sideOne == sideThree && sideTwo == sideThree){
    return "Equilátero";
  }else if(sideOne == sideTwo || sideOne == sideThree || sideTwo == sideThree){
    return "Isósceles";
  }else {
    return "Escaleno";
  }
};

console.log(triangle(3, 2, 3));