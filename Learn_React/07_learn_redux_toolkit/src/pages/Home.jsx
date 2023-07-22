import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumber } from '../store/features/counter'

export class Home extends PureComponent {
  addNumber(num) {
    this.props.addNumber(num)
  }

  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>Home page counter: {counter}</h2>
        <button onClick={e => this.addNumber(5)}>+5</button>
        <button onClick={e => this.addNumber(10)}>+10</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ counter: state.counter.counter })

const mapDispatchToProps = dispatch => ({
  addNumber(num) {
    dispatch(addNumber(num))
  }
})
// const mapDispatchToProps = {
//   addNumber(num) {
//     return addNumber(num)
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Home)