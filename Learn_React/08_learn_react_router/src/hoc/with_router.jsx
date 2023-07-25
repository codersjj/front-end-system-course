import { useNavigate, useParams } from "react-router-dom"

// 高阶组件：函数
function withRouter(WrappedComponent) {
  return function(props) {
    // 导航
    const navigate = useNavigate()

    // 获取动态路由（如：/detail/:id）的参数
    const params = useParams()

    const router = { navigate, params }

    return <WrappedComponent {...props} router={router} />
  }
}

export default withRouter