const normalizeWord = (word) => {
  return word
    .normalize('NFD')
    .replace(/\[u0300-\u036f]/g, '')
    .toLowerCase();
}

const findLetterA = (word) => {
  const wordNormalized = normalizeWord(word);
  let count = 0;

  wordNormalized.split('').forEach((letter, index) => {
    if (letter === 'a') {
      count++;
    }
  });


  return `Letra A foi encontrada ${count} vez(es) na palavra '${word}'`;
}

console.log(findLetterA('LimãAaáo'));


module.exports = findLetterA;