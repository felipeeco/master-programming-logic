/* 
dado un número, mostrar una escalera de "[-]" usando el número para los niveles de la escalera
given a number, display a staircase of "[-]" using the number for the levels of the staircase

example:

[-]
[-][-]
[-][-][-]
[-][-][-][-]

*/

function createStairs(number) {
  let completeStairs = ''

  for(let level = 1; level <= number; level++) {
    let stairs = ''

    stairs += '[-]'.repeat(level)

    completeStairs += stairs + (level === number ? '' : '\n')
  }

  return completeStairs
}

const print = createStairs(4)
console.log(print)
