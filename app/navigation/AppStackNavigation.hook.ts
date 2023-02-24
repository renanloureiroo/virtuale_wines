import { useFlipper } from '@react-navigation/devtools'
import { useNavigationContainerRef } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Linking, Platform } from 'react-native'
import { STORAGE_KEY } from '../shared/constants/storage'
import { storage } from '../shared/utils/storage/storage'

export const useAppStackNavigationScreen = () => {
  const [hydrated, setHydrated] = useState<boolean>(false)
  const [initialState, setInitialState] = useState()

  const navigationRef = useNavigationContainerRef()

  useFlipper(navigationRef)

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL()
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
    navigationRef
  }
}
