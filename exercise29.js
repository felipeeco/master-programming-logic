/*
Dado un número, indicar si es un número capicúa o no.
Los números capicúa se leen igual de izquierda a derecha o viceversa.

Given a number, determine if it is a palindrome number or not.
Palindrome numbers read the same from left to right or vice versa.
*/ 

function findPalindrome(num1) {
  const arrayTwo = num1.toString().split('').reverse()
  const numberTwo = arrayTwo.join('')

  if(num1.toString() === numberTwo.toString()) return true
  else return false
}

const print = findPalindrome(1111)
console.log(print)