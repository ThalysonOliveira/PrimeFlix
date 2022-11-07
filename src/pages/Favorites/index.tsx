import React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Tittle, FavoriteMovies, FavoriteOptions } from "./styles";

type Movie = {
  id: number;
  title: string;
};

const Favorites: React.FC = () => {
  const [myMoviesFavorites, setMyMoviesFavorites] = useState<Movie[]>([]);

  const myFavorites = localStorage.getItem("Movies");
  const myFavoritesParsed = useMemo(() => {
    return JSON.parse(myFavorites as string) || [];
  }, [myFavorites]);

  useEffect(() => setMyMoviesFavorites(myFavoritesParsed), [myFavoritesParsed]);

  const deleteMovieFavorite = useCallback(
    (myFavoriteMovieId: number) => {
      const myFavoriteMoviesFilted = myFavoritesParsed.filter(
        (favoriteMovie: Movie) => favoriteMovie.id !== myFavoriteMovieId
      );

      localStorage.setItem("Movies", JSON.stringify(myFavoriteMoviesFilted));

      setMyMoviesFavorites(myFavoriteMoviesFilted);

      toast.success("Filme excluído com sucesso!");
    },
    [myFavoritesParsed]
  );

  if (!myMoviesFavorites.length)
    return <Tittle>Sem filmes favoritados :)</Tittle>;

  return (
    <>
      <Tittle>Meus filmes</Tittle>
      {myMoviesFavorites.map((movieFavorite) => {
        return (
          <FavoriteMovies key={movieFavorite.id}>
            <li>{movieFavorite.title}</li>

            <FavoriteOptions>
              <Link to={`/movie/${movieFavorite.id}`}>Ver detalhes</Link>
              <button onClick={() => deleteMovieFavorite(movieFavorite.id)}>
                Excluir
              </button>
            </FavoriteOptions>
          </FavoriteMovies>
        );
      })}
    </>
  );
};

export default Favorites;
