console.log("Os Verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os Falsos...");
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Pra finalizar...");
console.log(!!('' || null || 0 || ' '));

// Exemplo
let nome = '';
console.log(nome || 'Desconhecido');

nome = 'Henrique';
console.log(nome || 'Desconhecido');
