import React, { memo, useContext } from 'react'
import { ThemeContext, UserContext } from './context'

const App = memo(() => {
  // 使用 context
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  return (
    <div>
      <h2 style={{ ...theme }}>App page theme</h2>
      <p>User: name: {user.name} , age: {user.age}</p>
    </div>
  )
})

export default App