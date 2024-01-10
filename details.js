const $containerDetails = document.getElementById(`infoMovie`);
const $table = document.getElementById(`tableMovie`);
const params = new URLSearchParams(location.search);
const id = params.get(`id`);

const movieDetail = movies.find((movie) => movie.id == id);
const porcentaje = movieDetail.vote_average.toFixed (2)


$containerDetails.innerHTML = `

<img  class="w-62 h-60 m-5  mt-10 border-4 border-purple-700 lg:w-1/2 lg:ml-44 " src="${movieDetail.image}" alt="">
<div class=" ml-10  ">
<h1 class=" mt-10 font-extrabold pb-5">${movieDetail.title}</h1>
<h2 class="font-semibold pb-2">${movieDetail.tagline}</h2>
<h3 class=" pb-5 " >${movieDetail.genres}</h3>
<p class=" mr-28 ">${movieDetail.overview}</p>
</div>

`;
$table.innerHTML = `
<table class="m-10 ">
<tr>
   <th class=" border-4 border-purple-900 p-3">Original Languaje</th>
   <td class="border-4 border-purple-900 p-3"> ${movieDetail.original_language}</td>
</tr>
<tr>
    <th class="border-4 border-purple-900 p-3">Relase Date</th>
    <td class="border-4 border-purple-900 p-3"> ${movieDetail.release_date}</td>
 </tr>
 <tr>
    <th class="border-4 border-purple-900 p-3">Runtime</th>
     <td class="border-4 border-purple-900 p-3"> ${movieDetail.runtime}</td>
 </tr>
 <tr>
 <th class="border-4 border-purple-900 p-3">Status</th>
  <td class="border-4 border-purple-900 p-3"> ${movieDetail.status}</td>
</tr>
 </table>

 <table class="m-10">
 <tr>
 <th class=" border-4 border-purple-900 p-2">Vote average</th>
 <td class=" border-4 border-purple-900 p-2"> ${porcentaje}%</td>
</tr>
<tr>
  <th class=" border-4 border-purple-900 p-2">Budget</th>
  <td class=" border-4 border-purple-900 p-2"> ${movieDetail.budget.toLocaleString("en-US",{style:"currency",currency:"USD"})}</td>
</tr>
<tr>
  <th class=" border-4 border-purple-900 p-2">Revenue</th>
   <td class=" border-4 border-purple-900 p-2"> ${movieDetail.revenue.toLocaleString("en-US",{style:"currency",currency:"USD"})}</td>
</tr>
 </table>
            
            
            
            `;

          
