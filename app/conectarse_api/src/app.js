let currentPage = 1
const d = document
import { API_KEY } from './config.js';
const previousButton = d.getElementById('btnPrevious')
const nextButton = d.getElementById('btnFollowing')

nextButton.addEventListener('click', () => {
  if (currentPage < 1000) {
    currentPage += 1
    loadMovies()
  }
})

previousButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage -= 1
    loadMovies()
  }
})

const loadMovies = async () => {
  try {
    const answer = await fetch(
       `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-MX&page=${currentPage}`
    )

    // console.log(answer)

    // Si la respuesta es correcta
    if (answer.status === 200) {
      const moviesResponse = await answer.json()

      let moviesMarkup = ''
      moviesResponse.results.forEach((Movie) => {
        moviesMarkup += `
					<div class="movie">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${Movie.poster_path}">
						<h3 class="title">${Movie.title}</h3>
					</div>
				`
      })

      d.getElementById('container').innerHTML = moviesMarkup
    } else if (answer.status === 401) {
      console.log('Pusiste la llave mal')
    } else if (answer.status === 404) {
      console.log('La pelicula que buscas no existe')
    } else {
      console.log('Hubo un error y no sabemos que paso')
    }
  } catch (error) {
    console.log(error)
  }
}

loadMovies()
