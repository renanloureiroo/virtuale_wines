import { useEffect, useState } from 'react'

export const useLocalStorage = <T = any>(key: string, initialValue = '') => {
  const [state, setState] = useState<T>(() => {
    const storedData = localStorage.getItem(key)

    if (storedData) {
      // Se houver algo salvo, retorna
      return JSON.parse(storedData)
    }

    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
