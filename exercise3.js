"use strict";

// Dada una palabra, buscarla en una frase y devolver cuantas veces aparece.
// La frase y la palabra deben ser paremetros de una function
// Given a word, search for it in a sentence and return how many times it appears.
// The sentence and the word must be parameters of a function.

function findWord(word, sentence) {
  const cleanText = sentence.toLowerCase().replace(/[¡!.,-]/gi, '')
  const cleanWord = word.toLowerCase().replace(/[¡!.,-]/gi, '')
  const splitText = cleanText.split(' ');

  const result = splitText.filter(w => w === cleanWord).length
  return result
}

const print = findWord('dog', 'there is a dog follow another dog')
console.log(print)