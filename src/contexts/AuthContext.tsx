'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { getUser, setAuthToken } from '@/lib/api'

type User = {
  id: number
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  login: (user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setAuthToken(token)
      checkAuth()
    }
  }, [])

  const checkAuth = async () => {
    try {
      const userData = await getUser()
      setUser(userData)
    } catch (error) {
      console.error('Error checking auth:', error)
      setUser(null)
    }
  }

  const login = (userData: User) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
    setAuthToken('')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}