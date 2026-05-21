'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getMe, logoutUser } from '@/services/auth.service'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchUser = useCallback(async () => {
    try {
      const data = await getMe()
      setUser(data.user)
    } catch {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  const login = (userData) => setUser(userData)

  const logout = async () => {
    try {
      await logoutUser()
    } catch {
      setUser(null)
    }
    setUser(null)
  }

  const value = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated: Boolean(user),
      login,
      logout,
      refreshUser: fetchUser,
    }),
    [user, loading, fetchUser],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
