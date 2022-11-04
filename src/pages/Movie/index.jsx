import { useParams, useNavigate } from 'react-router-dom'
import './index.css'
import theMovieDbApi from '../../services/theMovieDbApi'
import { useCallback, useEffect, useState } from 'react'
import Loading from '../../components/Loading'
import { toast } from 'react-toastify'

function Movie() {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const navigation = useNavigate()

  useEffect(() => {
    async function loadMovieDetails() {
      await theMovieDbApi.get(`/movie/${id}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: 'pt-br',
        }
      }).then(movieApiDetails => {
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
    <div className='movie-detail'>
      <h1>{movie.title}</h1>

      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

      <h3>Sinopse</h3>
      <span>{movie.overview}</span>

      <strong>Avaliação: {movie.vote_average}</strong>

      <div className='area-buttons'>
        <button onClick={saveMovie}>Salvar</button>
        <button>
          <a href={`https://www.youtube.com/results?search_query=a${movie.title} Trailer`}
            target='blank'
            rel='external'>Trailer</a>
        </button>
      </div>
    </div>
  )
}

export default Movie;

