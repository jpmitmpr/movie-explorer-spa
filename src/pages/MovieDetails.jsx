import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovieDetails } from '../services/api'

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    getMovieDetails(id).then(setMovie)
  }, [id])

  if (!movie) return <p>Loading...</p>

  return (
    <div className="container">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
    </div>
  )
}

export default MovieDetails