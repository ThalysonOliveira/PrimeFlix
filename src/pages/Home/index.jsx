import { useEffect, useState, } from 'react'
import theMovieDbApi from '../../services/theMovieDbApi'
import { Link } from 'react-router-dom'
import './index.css'

function Home() {
    const paramsUrlApi = '/movie/now_playing'
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilmes() {
            const { data: theMovieDbApiResponse } = await theMovieDbApi.get(paramsUrlApi, {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language: 'pt-br',
                    page: 1
                }

            })
            setMovies(theMovieDbApiResponse.results.slice(0, 10))

        }

        loadFilmes()
        setLoading(false)

    }, [])

    if(loading){
        return <div className='loading'><h2>Carregando filmes...</h2></div>
    }

    return (
        <div className='list-movies'>
            {
                movies.map(movie => {
                    return (
                        <article  className='movies' key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <Link to={`/movie/${movie.id}`}>Acessar</Link>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default Home;