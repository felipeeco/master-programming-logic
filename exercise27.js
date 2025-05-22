/*
Crear una function que tome como parametro un número de días y retorne
a cuantos años, meses y días equivale

Create a function that takes a number of days as a parameter 
and returns how many years, months, and days it is equivalent to.
*/

function calculateDays(days) {
  let years = Number((days/365).toFixed(0))
  let rest_days = Number((days%365).toFixed(0))
  let months = Number((rest_days/30).toFixed(0))
  rest_days = Number((rest_days%30).toFixed(0))

  return `Rest of the time, Days: ${rest_days} Months: ${months} Years: ${years}`
}

const print = calculateDays(1200)
console.log(print)