import axios from "axios"

let service = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

// get
function getAction(url: string, params: Object) {
  return service.get(url, params)
}

export { getAction }