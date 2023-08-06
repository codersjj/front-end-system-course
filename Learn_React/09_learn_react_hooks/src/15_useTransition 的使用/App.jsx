import React, { memo, useState } from 'react'
import namesArray from './namesArray'

const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray)

  function handleInput(e) {
    const { value: keyword } = e.target
    // 注意：这里需要从完整的数组即 namesArray 中进行过滤
    const filteredShowNames = namesArray.filter(name => name.includes(keyword))
    setShowNames(filteredShowNames)
  }

  return (
    <div>
      <input type="text" onInput={handleInput} />
      <h2>用户名列表：</h2>
      <ul>
        {
          showNames.map((name, index) => {
            return <li key={name}>{name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default App