export function validateEmail(email) {
  if (!email?.trim()) return 'Email is required'
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!pattern.test(email.trim())) return 'Enter a valid email address'
  return ''
}

export function validatePassword(password, minLength = 6) {
  if (!password) return 'Password is required'
  if (password.length < minLength) {
    return `Password must be at least ${minLength} characters`
  }
  return ''
}
