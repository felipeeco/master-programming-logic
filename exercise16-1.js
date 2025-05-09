// Dada una cadena de texto, devolver cuantas vocales tiene.
// Given a string, return how many vowels it has.

function countVocals(text) {
  let iquals = text.match(/[aeiou]/gi)

  return iquals.length
}

const print = countVocals('FelipE MorenO')
console.log(print)

