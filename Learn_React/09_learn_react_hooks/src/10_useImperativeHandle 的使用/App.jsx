import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react'

const HelloWorld = memo(forwardRef((props, ref) => {

  const inputRef = useRef()

  // 子组件对父组件中传入的 ref 进行处理
  // 自定义 ref.current 想要暴露给父组件的东西
  useImperativeHandle(ref, () => {
    // 返回的对象会作为 ref 的 current 值
    return {
      focus() {
        console.log('focus')
        inputRef.current.focus()
      },
      setValue(value) {
        inputRef.current.value = value
      }
    }
  })

  // return <input ref={ref} />
  return <input ref={inputRef} />
}))

const App = memo(() => {
  const titleRef = useRef()
  const inputRef = useRef()

  function handleDOM() {
    // console.log(titleRef.current)
    console.log(inputRef.current)
    inputRef.current.focus()
    // inputRef.current.value = '嘻嘻嘻'
    inputRef.current.setValue('嘿嘿嘿')
  }

  return (
    <div>
      <h2 ref={titleRef}>哈哈哈</h2>
      <HelloWorld ref={inputRef} />
      <button onClick={handleDOM}>DOM 操作</button>
    </div>
  )
})

export default App