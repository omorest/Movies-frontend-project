import { urlPostToken, urlRequestToken } from '../urlsApi'
import { Token } from './model'

export const fetchRequestToken = async (): Promise<Token> => {
  const data = await fetch(urlRequestToken)
  const { request_token: requestToken } = await data.json()
  return requestToken
}

export const fetchPostToken = async (token: string) => {
  const postData = {
    request_token: token
  }
  const response: any = await fetch(urlPostToken, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  const { session_id: sessionId } = await response.json()
  return sessionId
}
