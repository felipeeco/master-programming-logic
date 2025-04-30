// Cuanto es el X por ciento de X número
// How much is X percent of X number

function getPercent(percent, number) {
  const operation = (number * (percent/100))
  return operation
}

const print = getPercent(20, 100)
console.log(print)

