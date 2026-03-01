import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar">
      <h1>Movie Explorer</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  )
}

export default Header