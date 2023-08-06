import React, { memo, useId, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  const id = useId()
  console.log("🚀 ~ file: App.jsx:7 ~ App ~ id:", id)

  return (
    <div>
      <h2>App</h2>
      <button onClick={e => setCount(count + 1)}>count is {count}</button>

      <label htmlFor={id}>
        用户名：<input id={id} type="text" />
      </label>
    </div>
  )
})

export default App