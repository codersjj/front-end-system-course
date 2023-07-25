import { useNavigate } from "react-router-dom"

// 高阶组件：函数
function withRouter(WrappedComponent) {
  return function(props) {
    const navigate = useNavigate()

    const router = { navigate }

    return <WrappedComponent {...props} router={router} />
  }
}

export default withRouter