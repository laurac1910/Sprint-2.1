const url = 'https://moviestack.onrender.com/api/movies'
const init = { 
    headers:{
        "x-api-key": '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
}
export let allMovies = []


await fetch(url, init)
.then(Response => Response.json())
.then(data => allMovies=data.movies.map(movie =>{
  const { image, ... rest} = movie;
  return { image: "https://moviestack.onrender.com/static/"+image, ...rest}
  
}))
.catch(err => console.log(err))


const $containerId = document.getElementById("container1");

export function cardMaker(allMovies,$containerId) {
 if ($containerId) {
   $containerId.innerHTML = "";
  const cardHtml = allMovies.reduce(
     (acumulador, movie) => {
      console.log(movie.genres);
   return `${acumulador}
  
     <article class="border-2 border-purple-900 w-80  text-center rounded-lg  relative ">
     <button id="fav ${movie.id}" class="hover:text-white text-gray-500  hover:fill-red-600 absolute z-30 top-2 right-0 mt-2 mr-3 "  >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 hover:fill-red-600 fill-gray-300 bg-transparent ">
       <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
     </svg>
   </button>   
       <img class="w-full h-48 object-cover rounded-lg" src="${movie.image}" alt="Foto pelicula"> 
     <h3 class="font-bold py-2 text-lg">${movie.title}</h3>
     <h2 class="py-2 ">${movie.tagline}</h2>
     <p class="px-2 line-clamp-3">${movie.overview}</p>
     <a href="./details.html?id=${movie.id}">  
   <button type="button" class="w-24 border-purple-800 border-2 bg-purple-200 m-5 rounded-xl p-3 " >DETAILS</button>
 </a>
 </article>`;
     }, "")
     $containerId.innerHTML = cardHtml;

   }}
  
 cardMaker(allMovies,$containerId)
 

 const $inputText = document.getElementById(`inputText`);
 const $genreFilter = document.getElementById(`genre`);

// // /////////////////////// funcion search


// // // function applyFilter() {
// // //   const filterMovies = movies.filter((movie) =>
// // //     movie.title.toLowerCase().includes($inputText.value.toLowerCase())
// // //   );
// // //   console.log(filterMovies);

// // //   const filter = filterMovies.map((movie) => cardMaker(movie)).join("");

// // //   $containerId.innerHTML = filter;
// // // }


// // // /////////////// funcion select


// // // function applyFilter2() {
  // // //   const peliculasFiltradas = $genreFilter.value
  // // //     ? movies.filter((movie) => movie.genres.includes($genreFilter.value))
  // // //     : movies;
  
  // // //   const peliculasHTML = peliculasFiltradas
  // // //     .map((movie) => cardMaker(movie))
  // // //     .join("");
  // // //   $containerId.innerHTML = peliculasHTML;
  // // // }
  
  
  
  // /////////////// las dos funciones combinadas
  
  function results() {
    
    const resultsSearch = $inputText.value.toLowerCase();
    const resultado1 = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(resultsSearch)
    );
    const resultsSelect = $genreFilter.value;
    const resultado2 = $genreFilter.value
    ? allMovies.filter((movie) => movie.genres.includes(resultsSelect))
    : allMovies;
    const filteredMovies= resultado1.filter((movie) => resultado2.includes(movie));
    cardMaker(filteredMovies, $containerId)
  }
  
  if ($inputText || $genreFilter) {
    $inputText.addEventListener("input", results);
    $genreFilter.addEventListener("change", results);
  }
  
  ///////////
  
  

