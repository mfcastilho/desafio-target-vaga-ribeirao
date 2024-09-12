/*2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; */

const normalizeWord = (word) => {
  return word
    .normalize('NFD')
    .replace(/\[u0300-\u036f]/g, '')
    .toLowerCase();
}

const findLetterA = (word) => {
  const wordNormalized = normalizeWord(word);
  let count = 0;

  wordNormalized.split('').forEach(letter => {
    if (letter === 'a') {
      count++;
    }
  });

  if (count === 0) {
    return `A letra A não foi encontrada na palavra ${word}`;
  }

  return `Letra A foi encontrada ${count} vez(es) na palavra '${word}'`;
}

console.log(findLetterA('MAriâná'));


module.exports = findLetterA;