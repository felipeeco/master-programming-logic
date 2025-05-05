// Dado un texto y una busqueda, censurar todas las coincidencias de la busqueda con [-CENSORED-]
// Si el texto o busqueda están vacios se debe mostrar 'You need to write phrase and search word'

// Given a text and a search term, censor all occurrences of the search term with [-CENSORED-]
// If the text or search term are empty, it should display 'You need to write phrase and search word'

function replaceText(phrase, word) {
  if (!phrase || !word) return 'You need to write phrase and search word'
  return phrase.replace(new RegExp(word, 'g'), '[-CENSORED-]')
}

const print = replaceText('perros perros mucho', 'perros')
console.log(print)