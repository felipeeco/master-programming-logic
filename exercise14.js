// Dado un string y un número, repetir el string tantas veces el número indique
// Given a string and a number, repeat the string as many times as the number indicates

function repeatString(phrase, numberToRepeat) {
  return `${phrase}\n`.repeat(numberToRepeat)
}

const print = repeatString('dog', 10)
console.log(print)