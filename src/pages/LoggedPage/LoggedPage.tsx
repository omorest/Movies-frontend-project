import './LoggedPage.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchPostToken } from '../../api'
import { Button, Text } from '@chakra-ui/react'

const LoggedPage = () => {
  const [isDenied, setIsDenied] = useState<boolean>()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const requestSession = async () => {
      const query = new URLSearchParams(location.search)
      console.log(query)
      const denied = query.get('denied') === 'true'
      setIsDenied(denied)
      if (!denied) {
        console.log('holaa')
        setIsDenied(false)
        const requestTokenValidated = query.get('request_token')
        const sessionId = await fetchPostToken(requestTokenValidated as string)
        localStorage.setItem('sessionId', sessionId)
      }
    }
    requestSession()
  }, [])

  const handlerClick = () => navigate('/')

  return (
    <div className="info-logged">
      <div className="text">
        <Text fontSize='5xl' as='b' textAlign='left'>{isDenied ? 'Denied' : 'Approve'}</Text>
      </div>
      <Button colorScheme="blackAlpha" backgroundColor="#171923" width='30%' onClick={handlerClick}>Go home</Button>
    </div>
  )
}

export default LoggedPage
