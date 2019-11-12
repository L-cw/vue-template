import axios from 'axios'
import { Message } from 'element-ui'
import codeConfig from '@/utils/codeConfig'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => config,
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * errCode为非'0'是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.errCode === codeConfig.ERROR_CODE.SUCCESS) {
      return res
    } else {
      Message({
        message: res.msg,
        type: 'error',
        duration: 3 * 1000
      })
      return res
    }
  },
  error => {
    console.log('121123123123', error)
    console.log('err' + error) // for debug
    Message({
      message: '网络错误',
      type: 'error',
      duration: 1.5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
