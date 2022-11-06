import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Tittle, FavoriteMovies, FavoriteOptions } from './styles'

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

    if (!myMoviesFavorites.length) return <Tittle>Sem filmes favoritados :)</Tittle>;

    return (
        <>
            <Tittle>Meus filmes</Tittle>
            {
                myMoviesFavorites.map(movieFavorite => {
                    return (
                        <FavoriteMovies key={movieFavorite.id}>

                            <li >{movieFavorite.title}</li>

                            <FavoriteOptions>
                                <Link to={`/movie/${movieFavorite.id}`}>Ver detalhes</Link>
                                <button onClick={() => deleteMovieFavorite(movieFavorite.id)}>Excluir</button>
                            </FavoriteOptions>
                        </FavoriteMovies>
                    )
                })
            }
        </>
    )
}

export default Favorites;