// Dado un número mostrar todos los números desde ese al 0 de 8 en 8
// Given a number, display all numbers from that number to 0 in steps of 8

function returnNumberEight(number) {
  const step = 8;
  let result = ''

  while (number >= 0) {
    result += `Number ${number} ${number < step ? '' : '\n'}`
    number -= step;
  }

  return result
}

const print = returnNumberEight(100)
console.log(print)