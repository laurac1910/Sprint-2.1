import { allMovies } from "./main.js";
import { cardMaker } from "./main.js";

 let favMovies = [];
 const $addTofav = document.querySelectorAll('[id^="fav"]');
const storedFavorites = JSON.parse(localStorage.getItem('favoritos'));


function favorite() {
    const $favDiv = document.getElementById('favContainer');
    if (Array.isArray(storedFavorites)) {
        favMovies = storedFavorites;

    }
    cardMaker(favMovies, $favDiv);

$addTofav.forEach((favB) => {
    favB.addEventListener('click', (e) => {
        let id = favB.id.replace("fav ", "");
        console.log(id);

        const favMovie = allMovies.find((movie) => movie.id == id);
        console.log(favMovie);
        const isAlreadyAdded = favMovies.some((fav) => fav.id == favMovie.id);

        if (isAlreadyAdded) {
            favMovies = favMovies.filter((fav) => fav.id !== favMovie.id);
            console.log('Película eliminada de favoritos:', favMovie);
            const svgElement = favB.querySelector('svg');
                if (svgElement) {
                    console.log(svgElement)
                    svgElement.classList.remove('hover:fill-red-600', 'fill-gray-300');
                    svgElement.classList.add('hover:fill-gray-300', 'fill-red-600');
                }
        } else {
            favMovies.push(favMovie);
            console.log('Película añadida a favoritos:', favMovies);
            const svgElement = favB.querySelector('svg');
                if (svgElement) {
                    svgElement.classList.add('hover:fill-red-600', 'fill-gray-300');
                    svgElement.classList.remove('hover:fill-gray-300', 'fill-red-600');
                }
        }
        localStorage.setItem("favoritos", JSON.stringify(favMovies));
    });
    storedFavorites.forEach((Mymovs) => {
        let btnFav = "fav " + Mymovs.id

            let btnsfav=document.getElementById(btnFav)

            const svgElement = btnsfav.querySelector('svg');
            if(btnsfav){
                svgElement.classList.remove('hover:fill-red-600', 'fill-gray-300');
                svgElement.classList.add('hover:fill-gray-300', 'fill-red-600');
            }
    });

  
})};

favorite ()


