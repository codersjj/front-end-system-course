import { useNavigate, useParams, useLocation, useSearchParams } from "react-router-dom"

// 高阶组件：函数
function withRouter(WrappedComponent) {
  return function(props) {
    // 导航
    const navigate = useNavigate()

    // 获取动态路由（如：/detail/:id）的参数
    const params = useParams()

    // 获取查询字符串（如：/user?name=zhj&age=20）的参数
    // 方式一：useLocation()，返回的对象中会有 search 属性，我们可以从该属性值中获取 ?name=zhj&age=20，后续还要自己做解析，有点麻烦
    const location = useLocation()
    // console.log("🚀 ~ file: with_router.jsx:15 ~ returnfunction ~ location:", location)
    // 方式二：useSearchParams()
    const [searchParams] = useSearchParams()
    const query = Object.fromEntries(searchParams)

    const router = { navigate, params, location, query }

    return <WrappedComponent {...props} router={router} />
  }
}

export default withRouter