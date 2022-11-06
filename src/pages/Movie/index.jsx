import { useParams, useNavigate } from 'react-router-dom'
import theMovieDbApi from '../../services/theMovieDbApi'
import { useCallback, useEffect, useState } from 'react'
import Loading from '../../components/Loading'
import { toast } from 'react-toastify'
import { MovieDetail, AreaButtons } from './styles'

function Movie() {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const navigation = useNavigate()

  useEffect(() => {
    async function loadMovieDetails() {
      await theMovieDbApi.get(`/movie/${id}`)
        .then(movieApiDetails => {
          setMovie(movieApiDetails.data)
          setLoading(false)

        }).catch(() => {
          return navigation('/', { replace: true })
        })
    }

    loadMovieDetails()

    return () => { }
  }, [id, navigation])

  const saveMovie = useCallback(() => {
    const myMovies = localStorage.getItem('Movies')

    const myMoviesParsed = JSON.parse(myMovies) || []

    const myMovieAlreadyExist = myMoviesParsed.some(myMovie => myMovie.id === movie.id)

    if (myMovieAlreadyExist) {
      return toast.warn('Este filme já esta na sua lista!')
    }

    myMoviesParsed.push(movie)
    localStorage.setItem('Movies', JSON.stringify(myMoviesParsed))
    toast.success('Filme salvo com sucesso!')
  }, [movie])

  if (loading) return <Loading status="Carregando detalhes do filme..." />

  return (
    <MovieDetail>
      <h1>{movie.title}</h1>

      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

      <h3>Sinopse</h3>
      <span>{movie.overview}</span>

      <strong>Avaliação: {movie.vote_average}</strong>

      <AreaButtons>
        <button onClick={saveMovie}>Salvar</button>
        <button>
          <a href={`https://www.youtube.com/results?search_query=a${movie.title} Trailer`}
            target='blank'
            rel='external'>Trailer</a>
        </button>
      </AreaButtons>
    </MovieDetail>
  )
}

export default Movie;

