// Dado una frase devolver cuantas consonantes y vocales tiene
// Given a sentence, return how many consonants and vowels it has

function findVocals(phrase) {
  const vocals = ['a', 'e', 'i', 'o', 'u']
  const arrayPhrase = phrase.toLowerCase().split('')

  const resultVocals = arrayPhrase.filter(letter => {
    if(vocals.includes(letter)) return letter
  })

  const resultConsonants = arrayPhrase.length - resultVocals.length

  return `The phrase has vocals ${resultVocals.length} and consonants ${resultConsonants}`  
}

const print = findVocals('perro')
console.log(print)