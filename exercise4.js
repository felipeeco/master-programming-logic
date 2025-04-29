"use strict";

//realiza el inverse de una palbra sin usar el metodo inverse de javascript
// Perform the reverse of a word without using JavaScript's reverse method

function inversedWord(word) {
  const splitWord = word.split('')
  const lengthSplitWord = splitWord.length
  let inversedWord = []; 

  for (let x = lengthSplitWord; x >= 0; x--) {
    inversedWord.push(splitWord[x])
  }

  return inversedWord.join('')
}

const print = inversedWord('perro');
console.log(print)