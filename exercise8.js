// dado un número entero inviertelo y devuelve de nuevo un número entero
// given an integer, reverse it and return it as an integer

function reverseInteger(number) {
  const intergerString = number.toString()
  const reverseString = intergerString.split('').reverse()
  const joinString = reverseString.join('')
  return +joinString;
}

const print = reverseInteger(19)
console.log(print)