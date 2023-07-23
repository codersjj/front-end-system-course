// connect 函数的参数：
// 参数一：函数
// 参数二：函数
// 返回值：函数（并且是一个高阶组件）

import { PureComponent } from "react"
// import store from "../store"
import { StoreContext } from "./StoreContext"

export function connect(mapStateToProps, mapDispatchToProps) {
  // 返回一个高阶组件（函数）
  return function(WrappedComponent) {
    class NewComponent extends PureComponent {
      constructor(props, context) {
        // console.log('constructor args', arguments)
        super(props)

        // 通过执行 mapStateToProps(store.getState())，获取只在该组件中需要用到的数据
        this.state = mapStateToProps(context.getState())
      }

      componentDidMount() {
        // 通过订阅，监听数据的改变
        this.unsubscribe = this.context.subscribe(() => {
          // 强制重新渲染（不建议，因为我们可能只用了一部分数据，没有必要将所有的数据都刷新）
          // this.forceUpdate()

          // 通过执行 mapStateToProps(store.getState())，获取只在该组件中用到的数据，再重新 setState
          // 每次调用 mapStateToProps(store.getState()) 都会返回一个新对象，而 PureComponent 底层会判断是否是 shallowEqual，oldState 和 newState 不是同一个对象时，之后才会去 re-render
          this.setState(mapStateToProps(this.context.getState()))
        })
      }

      // 我们可以做得更多一点：组件卸载的时候取消订阅
      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        console.log('render ~')
        const stateObj = mapStateToProps(this.context.getState())
        const dispatchObj = mapDispatchToProps(this.context.dispatch)
        return <WrappedComponent {...this.props} {...stateObj} {...dispatchObj} />
      }
    }

    NewComponent.contextType = StoreContext

    return NewComponent
  }
}
