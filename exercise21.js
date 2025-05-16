/*
Dado una cadena de texto y un número, recortar el string mostrando los X primeros caracteres
Given a string of text and a number, trim the string to show the first X characters.
*/

function cutString(phrase, long) {
  let result = ''

  for(let indeX = 0; indeX < long; indeX++) {
    result += phrase[indeX]
  }

  return result
}

const print = cutString('Cursos desarrollo web', 6)
console.log(print)