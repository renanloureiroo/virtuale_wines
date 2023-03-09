import React, { FC, ReactNode } from 'react'
import { AuthProvider } from '../AuthContext'

interface MainProviderProps {
  children: ReactNode
}

export const MainProvider: FC<MainProviderProps> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>
}
