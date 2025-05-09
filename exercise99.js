// Dado un array obtener el tipo de formato de cada archivo 
// Given an array, get the file type of each file

const arrayExample = [
  'accounts.ex',
  'executable.or.exe',
  'book.pdf'
]

function getExtension(array) {
  const result = array.map(element => {
    const arrayExtensions = element.split('.')
    return arrayExtensions[arrayExtensions.length - 1]
  })

  return result
}

const print = getExtension(arrayExample)
console.log(print)