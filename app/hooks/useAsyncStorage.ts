import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import { STORAGE_KEY } from './../shared/constants/storage'
import { storage } from '../shared/utils/storage/storage'

type useLocalStorageType<T> = [state: T, setState: Dispatch<SetStateAction<T>>]

export const useLocalStorage = <T = false>(
  key: STORAGE_KEY,
  initialValue?: T
): useLocalStorageType<T> => {
  const [state, setState] = useState<T>(initialValue)

  useEffect(() => {
    const getValue = async (): Promise<void> => {
      const storedData = await storage.get(key)

      if (storedData) {
        // Se houver algo salvo, retorna
        return setState(JSON.parse(storedData))
      }
    }

    getValue()
  }, [])

  useEffect(() => {
    storage.set(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
