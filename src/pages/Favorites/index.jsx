import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import './index.css'

function Favorites() {
    const [myMoviesFavorites, setMyMoviesFavorites] = useState([])

    const myFavorites = localStorage.getItem('Movies')
    const myFavoritesParsed = useMemo(() => {
        return JSON.parse(myFavorites) || []
    }, [myFavorites])

    useEffect(() => setMyMoviesFavorites(myFavoritesParsed), [myFavoritesParsed])

    const deleteMovieFavorite = useCallback((myFavoriteMovieId) => {

        const myFavoriteMoviesFilted = myFavoritesParsed.filter(favoriteMovie => favoriteMovie.id !== myFavoriteMovieId)

        localStorage.setItem('Movies', JSON.stringify(myFavoriteMoviesFilted))

        setMyMoviesFavorites(myFavoriteMoviesFilted)

        toast.success('Filme excluído com sucesso!')
    }, [myFavoritesParsed])

    if (!myMoviesFavorites.length) return <h1>Sem filmes favoritados :)</h1>;

    return (
        <>
            <h1>Meus filmes</h1>
            {
                myMoviesFavorites.map(movieFavorite => {
                    return (
                        <div className='favorite-movies' key={movieFavorite.id}>

                            <li >{movieFavorite.title}</li>

                            <div className="favorite-options">
                                <Link to={`/movie/${movieFavorite.id}`}>Ver detalhes</Link>
                                <button onClick={() => deleteMovieFavorite(movieFavorite.id)}>Excluir</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Favorites;