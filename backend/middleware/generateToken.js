import jwt from 'jsonwebtoken'

const genarateAccessToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '15m',
  })
}

const genarateRefreshToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '15m',
  })
}

export { genarateAccessToken, genarateRefreshToken }
