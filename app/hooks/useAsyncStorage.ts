import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import { STORAGE_KEY } from './../shared/constants/storage'
import { storage } from '../shared/utils/storage/storage'

type useLocalStorageType<T> = [
  state: T,
  setState: Dispatch<SetStateAction<T>>,
  hydrated: boolean
]

export const useLocalStorage = <T = false>(
  key: STORAGE_KEY,
  initialValue?: T
): useLocalStorageType<T> => {
  const [state, setState] = useState<T>(initialValue)
  const [hydrated, setHydrated] = useState<boolean>(true)

  useEffect(() => {
    const getValue = async (): Promise<void> => {
      return await storage
        .get(key)
        .then((data) => setState(JSON.parse(data)))
        .finally(() => setHydrated(false))
    }

    getValue()

    return () => setHydrated(true)
  }, [])

  useEffect(() => {
    storage.set(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState, hydrated]
}
