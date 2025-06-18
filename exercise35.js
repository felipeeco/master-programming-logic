// Dado un array devolver el primer y ultmo elmento del array
// Given an array, return the first and last element of the array


function firstAndLast(array) {
  return [array[0], array[array.length - 1]]
}

const print = firstAndLast([100,200,300,780])
console.log(print)
