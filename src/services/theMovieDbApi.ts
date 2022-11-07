import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';

const theMovieDbApi = axios.create({
  baseURL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'pt-br',
    page: 1
  }
});

export default theMovieDbApi;
