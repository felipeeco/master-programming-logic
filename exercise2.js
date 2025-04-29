"use strict";

// Dada una cadena de texto, comprobar si es un palindromo o no.
//Given a string, check if it is a palindrome or not.

function detectPalindrome(word) {
  const reverseWord = word.split('').reverse().join('');
  return (reverseWord === word)
}

const print = detectPalindrome('ana');
console.log(print)