import { LoadingContainer } from './styles'

function Loading(movie) {
    return (
        <LoadingContainer>
            <h2>{movie.status}</h2>
        </LoadingContainer>
    )
}

export default Loading;