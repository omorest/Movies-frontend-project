import './Navbar.css'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { fetchRequestToken } from '../../api'
import { Text } from '@chakra-ui/react'

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false)
  const navigate = useNavigate()

  const handlerLogin = async () => {
    const requestToken = await fetchRequestToken()
    console.log(location.origin)
    const url = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${location.origin}/logged`
    window.location.replace(url)
  }

  const handlerLogout = () => {
    localStorage.removeItem('sessionId')
    navigate('/')
    setIsLogged(false)
  }

  useEffect(() => {
    const isLogged = Boolean(localStorage.getItem('sessionId'))
    setIsLogged(isLogged)
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
            isLogged
              ? <div className="log" onClick={handlerLogout}>Logout</div>
              : <div className="log" onClick={handlerLogin}>Login</div>
          }
        </div>
      </div>
      <br />
      <br />
    </>
  )
}

export default Navbar
