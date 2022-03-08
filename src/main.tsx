import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Container, ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <Container maxW='container.xl'>
        <App />
      </Container>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
