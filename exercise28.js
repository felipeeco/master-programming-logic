/* 
Dado un número, devolver su factorial.
El factorial de un número es la multiplicación de todos los números hasta llegar a el.

Given a number, return its factorial.
The factorial of a number is the multiplication of all the numbers up to it.
*/

function factorial(number) {
  let result = 1;

  for(let i = 1; i <= number; i++) {
    result *= i
  }

  return result
}

const print = factorial(5)
console.log(print)