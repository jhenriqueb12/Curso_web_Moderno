/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capitalInicial, taxaJuros, tempo) {
 let juros = capitalInicial * taxaJuros * tempo;
 let montanteSimples = capitalInicial + juros;

 console.log(`O valor do montante (com regime de juros simples) é R$${montanteSimples.toFixed(2)}`);
};

function jurosCompostos(capitalInicial, taxaJuros, tempo) {
  let montanteComposto = capitalInicial * (Math.pow(1 + taxaJuros, tempo));

  console.log(`O valor do montante (com regime de juros compostos) é R$${montanteComposto.toFixed(2)}`);
};

jurosSimples(1000, 0.03, 12);
jurosCompostos(1000, 0.03, 12);