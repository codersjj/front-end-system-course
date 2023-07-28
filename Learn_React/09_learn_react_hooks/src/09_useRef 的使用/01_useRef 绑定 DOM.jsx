import React, { memo, useRef } from 'react'

const App = memo(() => {
  const titleRef = useRef()
  const inputRef = useRef()

  function showTitleDOM() {
    console.log(titleRef.current)
    inputRef.current.focus()
  }

  return (
    <div>
      <h2 ref={titleRef}>Hello World</h2>
      <input ref={inputRef} type="text" />
      <button onClick={showTitleDOM}>查看 &lt;h2&gt; 的 DOM</button>
    </div>
  )
})

export default App