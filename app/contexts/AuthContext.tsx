import React, {
  createContext,
  ReactNode,
  FC,
  useEffect,
  useCallback
} from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'

import { useLocalStorage } from '../hooks/useAsyncStorage'
import { AuthenticationFirebaseService } from '../service/authentication/firebase'
import { STORAGE_KEY } from '../shared/constants/storage'

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
  const [state, setState, hydrated] = useLocalStorage(
    STORAGE_KEY.USER,
    {} as User
  )

  const signIn = async (credentials?: Credentials): Promise<void> => {
    if (credentials) {
      console.log(credentials)
    }
    try {
      const { user } = await AuthenticationFirebaseService.login()

      setState({
        name: user.givenName,
        email: user.email,
        avatar: user.photo
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log('state', state)
    console.log('hydrated', hydrated)
  }, [state, hydrated])

  const onLayoutRootView = useCallback(async () => {
    if (!hydrated) {
      await SplashScreen.hideAsync()
    }
  }, [hydrated])

  if (hydrated) {
    return null
  }

  return (
    <GestureHandlerRootView
      className="flex-1"
      onLayout={onLayoutRootView}>
      <AuthContext.Provider value={{ user: state, signIn }}>
        {children}
      </AuthContext.Provider>
    </GestureHandlerRootView>
  )
}
