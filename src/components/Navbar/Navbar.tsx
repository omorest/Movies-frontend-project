import './Navbar.css'
import { Link } from 'react-router-dom'
import { Button, Text } from '@chakra-ui/react'
import { fetchRequestToken } from '../../api'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false)

  const handlerLogin = async () => {
    const requestToken = await fetchRequestToken()
    const url = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/logged`
    window.location.replace(url)
  }

  const handlerLogout = () => {
    localStorage.removeItem('sessionId')
    setIsLogged(false)
  }

  useEffect(() => {
    setIsLogged(Boolean(localStorage.getItem('sessionId')))
  }, [])

  return (
    <>
      <div className="navbar">
        <div className="title-home">
          <Link to="/"><Text fontSize='4xl' as='b'>Movies App</Text></Link>
        </div>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/discover">Discover</Link>
          {isLogged ? <Link to="/favourites">Favorites</Link> : null}
          {
            isLogged ? <Button colorScheme='blue' onClick={handlerLogout}>Logout</Button> : <Button colorScheme='blue' onClick={handlerLogin}>Login</Button>
          }
        </div>
      </div>
      <br />
      <br />
    </>
  )
}

export default Navbar
