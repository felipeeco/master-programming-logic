// Dada una cadena de texto, devolver cuantas vocales tiene.
// Given a string, return how many vowels it has.

function countVocals(text) {
  const textFiltered = text.toLowerCase().split('')
  const vocals = ['a','e','i','o','u']
  return textFiltered.filter(element => {
    if(vocals.includes(element)) return element
  }).length
}

const print = countVocals('FelipE MorenO')
console.log(print)

