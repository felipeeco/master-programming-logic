// dado dos arrays, devolver array con solo los elmentos comunes entre ambos
// given two arrays, return an array with only the common elements between them

function iqualElements(array1, array2) {
  const result = array1.filter(element => {
    if(array2.includes(element)) return element
  })

  return result
}

const print = iqualElements([4,5,6,7], [7,8,9,7,5])
console.log(print)