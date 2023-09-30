'use client'
import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from '../api/index';


type AuthContextType = {
  userId: string;
}
export const AuthContext = createContext({} as AuthContextType)

export const Auth = () => useContext(AuthContext)

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState('')

  const createUser = async () => {
    try {
      const { data } = await api.post('/user/create')
      localStorage.setItem('coreLab.user_id', data.userId)
    } catch (error) {
      console.warn(error)
    }
  }
  const getUserId = () => {
    const useId = localStorage.getItem('coreLab.user_id')

    if (!useId) {
      createUser()
      return
    }
    setUserId(useId)
  }

  useEffect(() => {
    getUserId()
  }, [])
  return (
    <AuthContext.Provider value={{ userId }}>
      {children}
    </AuthContext.Provider>
  )
}