import axios from 'axios'

// 封装
export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/v1',
    timeout: 10000
  })

  // 2.1.axios的请求拦截器
  instance.interceptors.request.use((config) => {
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标

    // 3.某些网络请求(比如登陆的(token)),必须携带一些特殊的信息

    return config   //拦截之后必须返回
  }, err => {
    console.log(err)
  })

  // 2.2.axios的响应拦截器
  instance.interceptors.response.use((res) => {
    // console.log(res);
    return res.data    //返回的只有data了
  }, error => {
    // console.log(err)
  })

  //3.发送真正的网络请求
  return instance(config)
}
