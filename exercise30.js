// Dado un array de números, devolver el array sin elementos duplicados.
// Si hay una string eliminarlo del array.
// Ejemplo eliminateDuplicate([1,2,1,1,1,3,4]); rerturn [1,2,3,4]

// Given an array of numbers, return the array without duplicate elements.
// If there is a string, remove it from the array.
// Example: eliminateDuplicate([1,2,1,1,1,3,4]); return [1,2,3,4]

function eliminateDuplicate(array) {
  const withOutStrings = array.filter(el => typeof el !== 'string');
  const unique = [...new Set(withOutStrings)];
  return unique;
}


const result = eliminateDuplicate(['perro', 1])

console.log(result)
