const peso1 = 1.0;
const peso2 = Number("2.0");

const avaliacao1 = 9.781;
const avaliacao2 = 6.781;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2)

console.log(media);
console.log(media.toFixed(2));
console.log(media.toString(2)); // Para transformar em binário