import './index.css'

function Loading(movie) {
    return (
        <div className='loading'>
            <h2>{movie.status}</h2>
        </div>
    )
}

export default Loading;