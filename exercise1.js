// Dado un número devolver su tabla de multiplicación completa
// Given a number, return its complete multiplication table.

const limitNumber = 10;

function multipleListTable(number) {

  let result = `# Table result ${number} # \n`;

  for(x = 0; x <= limitNumber; x++) {
    const operation = number * x
    result += `${x} x ${number} = ${operation} \n`
  }

  return result;
}
const print = multipleListTable(2);
console.log(print)

