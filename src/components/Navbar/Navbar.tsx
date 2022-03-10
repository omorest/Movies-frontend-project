import './Navbar.css'
import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="title-home">
          <Link to="/"><Text fontSize='4xl' as='b'>Movies App</Text></Link>
        </div>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/discover">Discover</Link>
        </div>
      </div>
      <br />
      <br />
    </>
  )
}

export default Navbar
