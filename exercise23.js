/* 
Dado una cadena de texto poner en mayuscula la primera letra de cada palabra en la cadena y luego devolver la cadena
Given a string of text, capitalize the first letter of each word in the string and then return the string.
*/

function changePhrase(phrase) {
  const arrayPhrase = phrase.split(' ')
  const result = arrayPhrase.map(word => word[0].toUpperCase() + word.slice(1))
  return result.join(' ')
}

const print = changePhrase('Hola Mundo feliz')
console.log(print)