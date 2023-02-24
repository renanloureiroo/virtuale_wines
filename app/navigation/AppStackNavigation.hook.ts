import { useFlipper } from '@react-navigation/devtools'
import {
  LinkingOptions,
  useNavigationContainerRef
} from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Linking as RNLinking, Platform } from 'react-native'
import { STORAGE_KEY } from '../shared/constants/storage'
import { storage } from '../shared/utils/storage/storage'
import { AppStackParamList } from './AppStackNavigation'
import * as Linking from 'expo-linking'

export const useAppStackNavigationScreen = () => {
  const [hydrated, setHydrated] = useState<boolean>(false)
  const [initialState, setInitialState] = useState()

  const prefix = Linking.createURL('/')
  const linking: LinkingOptions<AppStackParamList> = {
    prefixes: [prefix],
    config: {
      screens: {
        authentication: {
          screens: {
            signin: 'login',
            signup: 'signup/:id'
          }
        },
        app: 'home'
      }
    }
  }

  const navigationRef = useNavigationContainerRef<AppStackParamList>()

  useFlipper(navigationRef)

  const onChangeState = async (state) =>
    await storage.set(STORAGE_KEY.NAVIGATION, state)

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await RNLinking.getInitialURL()
        console.log(initialUrl)

        if (Platform.OS !== 'web' && initialUrl === null) {
          const savedStateString = await storage.get(STORAGE_KEY.NAVIGATION)

          const state = savedStateString ?? undefined

          if (state !== undefined) {
            setInitialState(state)
          }
        }
      } catch (e) {
        console.log(e)
      } finally {
        setHydrated(true)
      }
    }

    if (!hydrated) {
      restoreState()
    }
  }, [hydrated])

  return {
    hydrated,
    initialState,
    navigationRef,
    onChangeState,
    linking
  }
}
