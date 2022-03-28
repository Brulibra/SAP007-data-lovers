
import { filmesDiretores, moviesByScore, sortMoviesByyear, porcMoviesDirector, sortMoviesAz } from './data.js';
import data from './data/ghibli/ghibli.js';

const infos = data.films;

function printar(infos) {

  document.getElementById("cards").innerHTML = infos.map((cards) =>
    `
    <div class = "flex-conteiner cards">
      <div class = "flex-itens poster">
        <img src = " ${cards.poster}" >
        </div>
        <div class = "flex-itens infos">
      <h1>  ${cards.title}</h1>
        <p> <b>Description</b> </P>
        <p>  ${cards.description}</p>
        <p> <b>Director</b> ${cards.director}</p>
        <p> <b>Producer</b> ${cards.producer}</p>
        <p> <b>Release Date</b> ${cards.release_date}</p>
        <p> <b>Score</b> ${cards.rt_score}</p>
        </div>
      </div>
    `
  ).join("")
}
printar(infos)

const directorsButton = document.getElementById("director");
directorsButton.addEventListener("change", () => {
  const directorsButton = document.getElementById("director");
  const directorIndex = directorsButton.selectedIndex;
  const directorSelect = directorsButton[directorIndex].value;
  const filtroDiretor = filmesDiretores(data, directorSelect);
  printar(filtroDiretor)
  document.querySelector(".curiosity").innerHTML = `A porcentagem de filmes dirigidos por <b>${directorSelect}</b> é de <b>${(porcMoviesDirector(data, filtroDiretor))}%</b>`
});

const scoreButton = document.getElementById("score");
scoreButton.addEventListener("change", () => {
  const scoreButton = document.getElementById("score");
  const scoreRate = scoreButton.selectedIndex;
  const selectedRate = scoreButton[scoreRate].value;
  const orderByScore = (moviesByScore(data, selectedRate))
  printar(orderByScore)
  document.querySelector(".curiosity").innerHTML = `You selected <b>${selectedRate}</b> score.`
});

const sortOrder = document.getElementById("year");
sortOrder.addEventListener("change", (event) => {
  const selectedSort = event.target.value;
  const orderYear = sortMoviesByyear(data, selectedSort);
  printar(orderYear);
  document.querySelector(".curiosity").innerHTML = `You chose to see from the <b>${selectedSort}</b> movies.`
});

const sortOrderAz = document.getElementById("films");
sortOrderAz.addEventListener("change", (event) => {
  const selectedSort = event.target.value;
  const filterAz = sortMoviesAz(data, selectedSort);
  printar(filterAz);
  document.querySelector(".curiosity").innerHTML = `You chose to see the movies from <b>${selectedSort}</b>.`
})

