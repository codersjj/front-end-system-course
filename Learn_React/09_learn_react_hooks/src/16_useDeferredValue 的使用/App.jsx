import React, { memo, useDeferredValue, useState } from 'react'
import namesArray from '../15_useTransition 的使用/namesArray'

const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray)
  const deferredShowNames = useDeferredValue(showNames)

  function handleInput(e) {
    const { value: keyword } = e.target
    const filteredShowNames = namesArray.filter(name => name.includes(keyword))
    setShowNames(filteredShowNames)
  }

  return (
    <div>
      <input type="text" onInput={handleInput} />
      <h2>用户名列表：</h2>
      <ul>
        {
          deferredShowNames.map((name, index) => {
            return <li key={name}>{name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default App