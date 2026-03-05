import { useState } from 'react'
import { searchMovies } from '../services/api'
import MovieCard from '../components/MovieCard'

const Search = () => {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Basic input sanitization to prevent XSS
  const sanitizeInput = (input) => {
    return input.replace(/[<>]/g, '').trim()
  }

  const handleSearch = async (e) => {
    e.preventDefault()

    const cleanQuery = sanitizeInput(query)

    if (!cleanQuery) {
      setError('Please enter a movie title')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const results = await searchMovies(cleanQuery)
      setMovies(results)
    } catch (err) {
      setError(err.message)
    }

    setLoading(false)
  }

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Search