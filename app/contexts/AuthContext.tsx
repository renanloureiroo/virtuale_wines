import React, { createContext, useState, ReactNode, FC } from 'react'
import { AuthenticationFirebaseService } from '../service/authentication/firebase'

type User = {
  email: string
  name: string
  avatar: string
}

type Credentials = {
  email: string
  password: string
}

export type AuthContextType = {
  user: User | null
  signIn: (credentials?: Credentials) => Promise<void>
}
interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextType>(null)

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const signIn = async (credentials?: Credentials): Promise<void> => {
    if (credentials) {
      console.log(credentials)
    }
    try {
      const { user } = await AuthenticationFirebaseService.login()

      setUser({
        name: user.givenName,
        email: user.email,
        avatar: user.photo
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
