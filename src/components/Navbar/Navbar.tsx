import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title-home">
        <Link to="/"><h1>Movies App</h1></Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>

      </div>
    </div>
  )
}

export default Navbar
