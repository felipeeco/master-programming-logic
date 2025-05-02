// dado dos números devolver cuantos número impares hay entre ellos
// given two numbers, return how many odd numbers are between them

function oddNumbers(initialNumber, lastNumber) {
  
  let result = 0;
  
  for(let x = initialNumber; x < lastNumber; x++) {
    if(!(x % 2 !== 0)) result += 1
  }

  return result
}

const print = oddNumbers(1, 100)
console.log(print)
