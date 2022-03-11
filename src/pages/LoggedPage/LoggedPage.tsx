import { Button } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchPostToken } from '../../api'

const LoggedPage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const requestSession = async () => {
    const query = new URLSearchParams(location.search)
    // const denied = query.get('denied')
    const requestTokenValidated = query.get('request_token')
    const sessionID = await fetchPostToken(requestTokenValidated as string)
    localStorage.setItem('sessionId', sessionID)
  }
  requestSession()

  const handlerClick = () => {
    navigate('/')
  }

  return (
    <>
      <div>LoggedPage</div>
      <Button onClick={handlerClick}>Go home</Button>
    </>
  )
}

export default LoggedPage
