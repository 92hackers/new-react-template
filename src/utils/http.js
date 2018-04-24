/**
 * Config Appliction HTTP, to request apis from services
 * 
 * @copyright Betanovo.ltd 2017 - present
 * @author chenyuan <chenyuan@betanovo.com>
 */

'use strict'

import axios from 'axios'
import browserHistory from './browserHistory'

const env = process.env.NODE_ENV
// TODO: Set up an Nginx proxy when local development
const host = env === 'production' ? '//translate.breword.com' : 'localhost'

const errorHandler = () => browserHistory.replace('/login?error=1')

const client = axios.create({
  baseURL: host,
  timeout: 100000,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  validateStatus: () => true,
})

const request = async (url, method = 'GET', body, headers) => {
  const res = await client.request({ url, method, data: body, headers })
    .catch((err) => err)

  // error cached, such as request timeout.
  if (!res.status) {
    errorHandler()
    return { error: '请求超时' }
  }

  const { response, status, data } = res

  // redirect to /login page if error returned, and set err msg
  if (status >= 400) {
    errorHandler()
    return { error: '网络错误，稍后再试' }
  }

  // if error cached, then res.response contains response obj.
  if (response) {
    return response.data
  }

  return data
}

export default request
