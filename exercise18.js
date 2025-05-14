// dado un número mostrar todos sus números divisores
// Given a number, display all its divisors.

function showAllDivisors(number) {

  let result = ''

  for(let initialNumber = 0; initialNumber <= number; initialNumber++) {
    if(number % initialNumber === 0) result += `${initialNumber} \n`
  }

  return result
}

const print = showAllDivisors(20)
console.log(print)

