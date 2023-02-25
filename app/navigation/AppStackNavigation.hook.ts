import { AuthenticationStackParamList } from './../features/Authentication/navigation/AuthenticationStack'

import {
  LinkingOptions,
  NavigationContainerRefWithCurrent,
  NavigatorScreenParams,
  useNavigationContainerRef
} from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Linking as RNLinking, Platform } from 'react-native'
import { STORAGE_KEY } from '../shared/constants/storage'
import { storage } from '../shared/utils/storage/storage'

import * as Linking from 'expo-linking'

type AppStackParamList = {
  authentication: NavigatorScreenParams<AuthenticationStackParamList>
  app: undefined
}

type useAppStackNavigationScreenType = {
  hydrated: boolean
  initialState: any
  navigationRef: NavigationContainerRefWithCurrent<AppStackParamList>
  onChangeState: (state: any) => void
  linking: LinkingOptions<AppStackParamList>
}

export const useAppStackNavigationScreen =
  (): useAppStackNavigationScreenType => {
    const [hydrated, setHydrated] = useState<boolean>(false)
    const [initialState, setInitialState] = useState()

    const prefix = Linking.createURL('/')
    const linking: LinkingOptions<AppStackParamList> = {
      prefixes: [prefix],
      config: {
        screens: {
          authentication: {
            initialRouteName: 'signin',
            screens: {
              signin: 'login',
              signup: 'signup/:id?'
            }
          },
          app: 'home'
        }
      }
    }

    const navigationRef = useNavigationContainerRef<AppStackParamList>()

    const onChangeState = async (state: any): Promise<void> =>
      await storage.set(STORAGE_KEY.NAVIGATION, state)

    useEffect(() => {
      const restoreState = async (): Promise<void> => {
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
