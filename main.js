
const $containerId = document.getElementById('container1')

function cardMaker(movies) {
    return `<section class="border-2 border-purple-900 w-80 mr-5 mb-5 text-center rounded-lg ">
    <img class="w-full h-48 object-cover rounded-lg" src="${movies.image}" alt="Foto pelicula">
    <h3 class="font-bold py-2 text-lg">${movies.title}</h3>
    <h2 class="py-2 ">${movies.tagline}</h2>
    <p class="px-2">${movies.overview}</p>
</section>`
}

$containerId.innerHTML += movies.reduce(
    (acumulador, movie) => (acumulador += cardMaker(movie)),
    " "
)