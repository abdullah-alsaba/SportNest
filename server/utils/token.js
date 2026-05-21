import jwt from 'jsonwebtoken'

export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  })
}

export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  maxAge: 7 * 24 * 60 * 60 * 1000,
}

export const sendTokenCookie = (res, token) => {
  res.cookie('token', token, cookieOptions)
}

export const clearTokenCookie = (res) => {
  res.cookie('token', '', { ...cookieOptions, maxAge: 0 })
}
