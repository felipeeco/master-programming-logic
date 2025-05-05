// Dado un número mostrar todos los números desde ese al 0 de 8 en 8
// Given a number, display all numbers from that number to 0 in steps of 8

function returnNumberEight(number) {
  const cicleNumber = 8
  let result = ''

  for(let initialNumber = number; initialNumber >= 0; initialNumber -= cicleNumber) {
    if(initialNumber >= 0) { 
      result += 'number ' + initialNumber + (initialNumber < cicleNumber ? '' : '\n')
    }
  }

  return result
}

const print = returnNumberEight(100)
console.log(print)