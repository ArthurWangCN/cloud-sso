import axios from '../index'

// 登录接口
export const login = params => axios.post('/sso/verify', params)


export default {
  login,
}
