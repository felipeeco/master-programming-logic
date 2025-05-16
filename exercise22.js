// dado dos números decir cual es mayor o cual menor
// given two numbers, determine which is greater or which is smaller

function indentifyMayorNumber(number1, number2) {
  let result = ''

  if(number1 > number2) {
    result += `The greater number is ${number1} \n`
    result += `The greater number is ${number2}`
  }

  if(number2 > number1) {
    result += `The greater number is ${number2} \n`
    result += `The greater number is ${number1}`
  }

  return result
}

const print = indentifyMayorNumber(8, 6)
console.log(print)