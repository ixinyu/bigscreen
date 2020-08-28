import axios from 'axios'
import { Toast } from 'vant'
const baseUrl = 'https://hotel.coboriel.com' // 基础路径
// 创建axios实例
const http = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 15000 // 请求超时时间
})

// http request 拦截器
http.interceptors.request.use(config => {
  config.headers = {
    // 'content-type': 'application/json'
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
  return config
},
error => {
  return Promise.reject(error)
}
)

// http response 拦截器
http.interceptors.response.use(response => {
  if (response.data.result === '000000') {
    Toast({
      message: response.data.message,
      type: 'warning',
      duration: 1000
    })
    return
  }
  if (response.data.result === '000001') {
    Toast({
      message: response.data.message,
      type: 'warning',
      duration: 1000
    })
  }
  return response.data
},
error => {
  return Promise.reject(error)
}
)

// 该方法为新增加的方法
// export const createAPI = (url, method, data) => {
//   const config = {}
//   if (method === 'get') {
//     config.params = data
//   } else {
//     config.data = data
//   }
//   return http({
//     url,
//     method,
//     ...config
//   })
// }

export default http

