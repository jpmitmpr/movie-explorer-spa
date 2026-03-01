import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

const MovieCard = ({ movie }) => {
  const { addFavorite } = useContext(FavoritesContext)

  return (
    <div className="card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
      <button onClick={() => addFavorite(movie)}>Add to Favorites</button>
    </div>
  )
}

export default MovieCard