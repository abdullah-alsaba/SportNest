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

export function validateName(name) {
  if (!name?.trim()) return 'Name is required'
  if (name.trim().length < 2) return 'Name must be at least 2 characters'
  return ''
}

export function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) return 'Confirm your password'
  if (password !== confirmPassword) return 'Passwords do not match'
  return ''
}
