let page = 1
const d = document

const btnPrevious = d.getElementById('btnPrevious')
const btnFollowing = d.getElementById('btnFollowing')

btnFollowing.addEventListener('click', () => {
  if (page < 1000) {
    page += 1
    LoadMovie()
  }
})

btnPrevious.addEventListener('click', () => {
  if (page > 1) {
    page -= 1
    LoadMovie()
  }
})

const LoadMovie = async () => {
  try {
    const answer = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${page}`
    )

    // console.log(answer)

    // Si la respuesta es correcta
    if (answer.status === 200) {
      const datos = await answer.json()

      let Movies = ''
      datos.results.forEach((Movie) => {
        Movies += `
					<div class="movie">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${Movie.poster_path}">
						<h3 class="title">${Movie.title}</h3>
					</div>
				`
      })

      d.getElementById('container').innerHTML = Movies
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

LoadMovie()
