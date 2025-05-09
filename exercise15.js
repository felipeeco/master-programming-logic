// Dado una cadena de texto, devolver el caracter más usado.
// Given a string, return the most used character.

function mostUsed(text) {
  const textTrim = text.trim()
  let map_leters = {}
  let max_reps = 0
  let most_used_letter = ''

  for(let leter of textTrim) {
    if (!map_leters[leter]) {
      map_leters[leter] = 1
    } else {
      map_leters[leter]++
    }
  }

  for(let leter in map_leters) {
    if(map_leters[leter] > max_reps) {
      max_reps = map_leters[leter]
      most_used_letter = leter
    }
  }

  return most_used_letter
}

const print = mostUsed('felipe      ')
console.log(print)


