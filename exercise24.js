/*
Dado un array de enteros y un número detectar si esta lista de números es un permutación
del 1 al número apartado.
En este caso una permutación es una secuencia de números en orden sin que falte ninguno de 
entre ellos
*/

/*
Given an array of integers and a number, detect if this list of numbers is a permutation
from 1 to the given number.
In this case, a permutation is a sequence of numbers in order without any missing numbers
among them.
*/

function findPermutation(array, number) {

  for(let x = 1; x <= number; x++) {
    if(x !== array[x - 1]) return false
  }

  return true
}

const print = findPermutation([1,2,3,5], 5)
console.log(print)
