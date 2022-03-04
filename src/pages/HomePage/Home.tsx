import { Input, Spacer } from '@nextui-org/react'

const Home = () => {
  return (
    <>
      <h1>Movies App</h1>
      <Spacer y={2}/>
      <Input clearable bordered placeholder="Cast, movie, production" color="secondary" width='300px'/>

      <h2>Most populars movies</h2>
      <h2>Now playing movies</h2>
    </>
  )
}

export default Home
