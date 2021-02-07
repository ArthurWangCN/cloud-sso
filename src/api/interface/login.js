import axios from '../index'

// 登录接口
export const login = params => axios.post('/sso/verify', params)

// 发送验证码
export const sendVerifyCode = params => axios.get('/sso/sendVerifyCode', { params })

// 登录接口
export const register = params => axios.post('/sso/register', params)

export default {
  login,
  sendVerifyCode,
  register
}
