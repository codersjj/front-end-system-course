import React, { memo, useContext } from 'react'
// import { UserContext, TokenContext } from './context'
import { useUserToken } from './hooks'

const Home = memo(() => {
  // const user = useContext(UserContext)
  // const token = useContext(TokenContext)
  const [user, token] = useUserToken()

  return <h2>Home page {user.name}-{token}</h2>
})

const About = memo(() => {
  // const user = useContext(UserContext)
  // const token = useContext(TokenContext)
  const [user, token] = useUserToken()

  return <h2>About page {user.name}-{token}</h2>
})

const App = memo(() => {
  // const user = useContext(UserContext)
  // const token = useContext(TokenContext)
  const [user, token] = useUserToken()

  return (
    <div>
      <h1>App root component {user.name}-{token}</h1>
      <Home />
      <About />
    </div>
  )
})

export default App