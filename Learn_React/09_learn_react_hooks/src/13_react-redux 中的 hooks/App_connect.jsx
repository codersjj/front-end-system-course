import React, { memo } from 'react'
import { connect } from 'react-redux'
import { addNumberAction, subNumberAction } from './store/modules/counter'

const App = memo((props) => {
  const { count, addNumber, subNumber } = props

  function addNumberHandler(num) {
    addNumber(num)
  }

  function subNumberHandler(num) {
    subNumber(num)
  }

  return (
    <div>
      <h2>App</h2>
      <h3>count: {count}</h3>
      <button onClick={e => addNumberHandler(1)}>+1</button>
      <button onClick={e => subNumberHandler(1)}>-1</button>
    </div>
  )
})

const mapStateToProps = (state) => ({
  count: state.counter.count
})

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumberAction(num))
  },
  subNumber(num) {
    dispatch(subNumberAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)