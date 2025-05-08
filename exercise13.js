'use stric'

/* 
Dado un array, dividirlo en tantas sub arrays como sea necesario basandose en el número dado.
Dividir en arays de X elementos

Example: 
splitArray([7,8,9,1], 2)
output:[7,8],[9,1]
*/

/* 
Given an array, divide it into as many sub-arrays as necessary based on the given number.
Split into arrays of X elements

Example: 
splitArray([7,8,9,1], 2)
output: [7,8], [9,1] 
*/

function splitArray(originalArray, splitNumber) {

  let resultArray = [] 

  for(let element of originalArray) {
    let lastElement = resultArray[resultArray.length - 1]

    if (!lastElement || lastElement.length === splitNumber) {
      resultArray.push([element])
    } else {
      lastElement.push(element)
    } 
  }

  return resultArray
}

const print = splitArray([7,8,9,1,3,4,5,6,6], 3)
console.log(print)

