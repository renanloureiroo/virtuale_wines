import { useContext } from 'react'
import { AuthContext, AuthContextType } from '../contexts/AuthContext'

const useAuth = (): AuthContextType => {
  const value = useContext(AuthContext)
  return value
}

export { useAuth }
