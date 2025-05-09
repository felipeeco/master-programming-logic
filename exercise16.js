// Dada una cadena de texto, devolver cuantas vocales tiene.
// Given a string, return how many vowels it has.

function countVocals(text) {
  const textFiltered = text.toLowerCase()
  const vocals = ['a','e','i','o','u']
  let total = 0

  for(letter of textFiltered) {
    if(vocals.includes(letter)) total++
  }

  return total
}

const print = countVocals('FelipE MorenO')
console.log(print)

