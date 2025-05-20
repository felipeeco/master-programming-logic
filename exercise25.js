/*
  dado un string ponerlo completo en mayusculas o minisculas
  dependiendo de si hay más mayusculas o minusculas por defecto en el string

  Given a string, convert it entirely to uppercase or lowercase depending on 
  whether there are more uppercase or lowercase letters in the string by default.
*/

function changeString(phrase) {
  let upperLeter = 0
  let minusLetter = 0

  for(let letter of phrase) {
    if(letter === letter.toLowerCase()) minusLetter++
    else upperLeter++
  }

  if(upperLeter > minusLetter) return phrase.toUpperCase()
  else return phrase.toLowerCase()
}

const print = changeString('hola me llamo FELIPE')
console.log(print)
