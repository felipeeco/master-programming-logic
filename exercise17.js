/* 
Dado un número, mostrar los números de uno hasta el número. 
Pero para múltiplos de tres imprimir 'buzz' en lugar del número,
para los múltiplos de cinco imprimir 'lightyear',
para los múltiplos de tres y de cinco imprimir 'BuzzLightyear'
*/

/* 
Given a number, display the numbers from one to the given number. 
But for multiples of three, print 'buzz' instead of the number,
for multiples of five, print 'lightyear',
and for multiples of both three and five, print 'BuzzLightyear'.
*/

/* 
Examples:
buzz(5)

output:
1
2
buzz
4
lightyear
*/

function buzz(number) {

  let result = ''

  for(let initialNumber = 1; initialNumber <= number; initialNumber++) {
    if(initialNumber % 3 === 0 && initialNumber % 5 === 0) {
      result += 'BuzzLightyear' + '\n'
    } else if (initialNumber % 3 === 0) {
      result += 'buzz' + '\n'
    } else if (initialNumber % 5 === 0) {
      result += 'lightyear' + '\n'
    } else {
      result += initialNumber.toString() + '\n'
    }
  }

  return result
}

const print = buzz(20)
console.log(print)





