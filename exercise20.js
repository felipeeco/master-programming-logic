/*
  Dado dos cadenas de texto, crear un algoritmo que compruebe si son anagramas o no.
  Un cadena es un anagrama de otra si usa los mismos caracteres en la misma cantidad.

  Given two strings, create an algorithm to check if they are anagrams or not.
  A string is an anagram of another if it uses the same characters in the same quantity.
*/

function checkAnagram(word1, word2) {
  const array1 = word1.trim().toLowerCase().split('').sort()
  const array2 = word2.trim().toLowerCase().split('').sort()

  if(array1.lenght !== array2.lenght) return false

  const result = array1.every((element, index) => {
    if(element === array2[index]) return true
    else false
  })

  return result
}

const print = checkAnagram('riesgo', 'sergio')
console.log(print)