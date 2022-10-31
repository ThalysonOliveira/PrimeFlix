import axios from 'axios'

const baseURL = 'https://api.themoviedb.org/3'

const theMovieDbApi = axios.create({
    baseURL
})

export default theMovieDbApi