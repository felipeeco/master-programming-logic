/* dado un array de peliculas (título, director y vista) mostrar las peliculas indicando cual has visto y cual no
Ejemplo: 
Ya haz visto el señor de los anillos
Te falta por ver la liga de la justicia
*/

/* Given an array of movies (title, director, and watched status), display the movies indicating which ones you have watched and which ones you have not.
Example: 
You have already watched The Lord of the Rings
You still need to watch Justice League
*/

const movies = [
  { title: "The Lord of the Rings", director: "Peter Jackson", watched: true },
  { title: "Justice League", director: "Zack Snyder", watched: false },
  { title: "Inception", director: "Christopher Nolan", watched: true },
  { title: "Avatar", director: "James Cameron", watched: false }
];

function wachedMovies(arrayMovies) {
  let result = ''

  for(movie of arrayMovies) {
    if(movie.watched) result += `I've already wached ${movie.title} \n`
    else result += `I have not wached ${movie.title} \n`
  }

  return result
}

const print = wachedMovies(movies)
console.log(print)

