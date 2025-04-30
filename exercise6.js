// dibujar un cudrado hueco con asteriscos
// draw a hollow square with asterisks
// Example
// ****
// *  *
// *  *
// *  *
// ****

function createSquare(number) {
  if (number < 2) {
    return "The square size must be at least 2.";
  }

  let result = "";

  // Top side of the square
  result += "*".repeat(number) + "\n";

  // Middle part of the square (hollow rows)
  for (let i = 0; i < number - 2; i++) {
    result += "*" + " ".repeat(number - 2) + "*\n";
  }

  // Bottom side of the square
  result += "*".repeat(number);

  return result;
}

const print = createSquare(10);
console.log(print);