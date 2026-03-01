import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'
import MovieCard from '../components/MovieCard'

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext)

  return (
    <div className="container">
      <h2>Your Favorites</h2>
      <div className="grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Favorites