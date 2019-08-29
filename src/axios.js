import axios from 'axios'

// 创建axios实例
const instance = axios.create({
  baseURL: "",
  timeout: 15000
})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

instance.interceptors.request.use(config => {
  window.accesstoken && (config.headers['Authorization'] = window.accesstoken) // 让每个请求携带自定义 token 请根据实际情况自行修改
  return config
}, err => {
  return Promise.reject(err)
})

/**
 * 添加一个响应拦截器
 */
instance.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export default instance
