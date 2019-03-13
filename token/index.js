const jwt = require('jsonwebtoken')
// Token 数据
const payload = {
  name: 'wq',
  password: "213465",
  admin: true
}
// 密钥
const secret = 'ILOVEXCQ'
const forToken = {
  setToken() {
    return new Promise((resolve, reject) => {
      // 签发 Token
      const token = jwt.sign(payload, secret, {
        expiresIn: '1day'
      })
      resolve(token)
    })
  },
  //解析token
  getToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, (error, decoded) => {
        if (error) {
          reject(error.message)
        }
        resolve(decoded)
      })
    })
  }
}
module.exports = forToken