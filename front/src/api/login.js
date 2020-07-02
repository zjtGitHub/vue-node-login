import axios from '@/utils/request'

/**
 * 获取验证码
 * @param sid 唯一标识
 * @returns {*}
 */
const getCode = (sid) => {
  return axios.get('/getCaptcha', {
    params: {
      sid: sid
    }
  })
}

/**
 * 找回密码
 * @param option 用户信息(邮箱,验证码)
 * @returns {*}
 */
const forget = (option) => {
  return axios.get('/forget', {
    ...option
  })
}

/**
 * 登陆接口
 * @param loginInfo 用户登录信息
 */
const login = (loginInfo) => {
  return axios.post('/login', {
    ...loginInfo
  })
}
export {
  getCode,
  forget,
  login
}
