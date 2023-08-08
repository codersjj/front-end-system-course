import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class JJRequest {
  constructor(baseURL, timeout) {
    // 每次创建 JJRequest 的实例时都创建一个新的 axios 实例
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use(res => {
      return res.data
    }, error => Promise.reject(error))
  }

  request(config) {
    return this.instance.request(config)
  }

  get(url, config) {
    return this.request({ ...config, method: 'get', url })
  }

  post(url, data, config) {
    return this.request({ ...config, method: 'post', url, data })
  }
}

const jjRequest = new JJRequest(BASE_URL, TIMEOUT)

export default jjRequest