const $containerId = document.getElementById("container1");

function cardMaker(movies) {
  return `
    <article class="border-2 border-purple-900 w-80  text-center rounded-lg ">
     <img class="w-full h-48 object-cover rounded-lg" src="${movies.image}" alt="Foto pelicula"> 
    <h3 class="font-bold py-2 text-lg">${movies.title}</h3>
    <h2 class="py-2 ">${movies.tagline}</h2>
    <p class="px-2">${movies.overview}</p>
    <a href="./details.html?id=${movies.id}">  
  <button type="button" class="w-24 border-purple-800 border-2 bg-purple-200 m-5 rounded-xl p-3 " >DETAILS</button>
</a>
</article>`;
}





$containerId.innerHTML += movies.reduce(
  (acumulador, movie) => (acumulador += cardMaker(movie)),
  " "
);

/////////////////////// funcion search

const $inputText = document.getElementById(`inputText`);

// function applyFilter() {
//   const filterMovies = movies.filter((movie) =>
//     movie.title.toLowerCase().includes($inputText.value.toLowerCase())
//   );
//   console.log(filterMovies);

//   const filter = filterMovies.map((movie) => cardMaker(movie)).join("");

//   $containerId.innerHTML = filter;
// }

$inputText.addEventListener("input", results);

// /////////////// funcion select

const $genreFilter = document.getElementById(`genre`);

// function applyFilter2() {
//   const peliculasFiltradas = $genreFilter.value
//     ? movies.filter((movie) => movie.genres.includes($genreFilter.value))
//     : movies;

//   const peliculasHTML = peliculasFiltradas
//     .map((movie) => cardMaker(movie))
//     .join("");
//   $containerId.innerHTML = peliculasHTML;
// }

$genreFilter.addEventListener("change", results);

/////////////// las dos funciones combinadas

function results() {
  const resultsSearch = $inputText.value.toLowerCase();
  const resultado1 = movies.filter((movie) =>
    movie.title.toLowerCase().includes(resultsSearch)
  );
  const resultsSelect = $genreFilter.value;
  const resultado2 = $genreFilter.value
    ? movies.filter((movie) => movie.genres.includes(resultsSelect))
    : movies;

  const filteredMovies = resultado1.filter((movie) =>
    resultado2.includes(movie)
  );


  const filteredHTML = filteredMovies.map((movie) => cardMaker(movie)).join("");
  $containerId.innerHTML = filteredHTML;
}
