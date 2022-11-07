import React from "react";
import { useEffect, useState } from "react";
import theMovieDbApi from "../../services/theMovieDbApi";
import Loading from "../../components/Loading";
import { ListMovies, Movies, Title, Acessar } from "./styles";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

const Home: React.FC = () => {
  const paramsUrlApi = "/movie/now_playing";
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const { data: theMovieDbApiResponse } = await theMovieDbApi.get(
        paramsUrlApi
      );
      setMovies(theMovieDbApiResponse.results.slice(0, 10));
    }

    loadFilmes();
    setLoading(false);
  }, []);

  if (loading) return <Loading status="Carregando filmes..." />;

  return (
    <ListMovies>
      {movies.map((movie) => {
        return (
          <Movies key={movie.id}>
            <Title>{movie.title}</Title>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
            <Acessar to={`/movie/${movie.id}`}>Acessar</Acessar>
          </Movies>
        );
      })}
    </ListMovies>
  );
};

export default Home;
