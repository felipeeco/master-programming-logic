/*
Dado un número mostrar su serie fibonacci.
La seria fibonacci es un orden de números donde 
cada número es la suma de los dos anteriores

Given a number, display its Fibonacci series.
The Fibonacci series is a sequence of numbers 
where each number is the sum of the two preceding ones.
*/

function fibonacci(num) {
  let serie = [0,1]

  for(let i = 2; i <= num; i++) {
    serie.push(serie[i - 1] + serie[i - 2])
  }

  return [serie, serie[num]]
}

const print = fibonacci(10)
console.log(print)
