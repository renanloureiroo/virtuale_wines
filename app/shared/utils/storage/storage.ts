import AsyncStorage from '@react-native-async-storage/async-storage'
import { STORAGE_KEY } from '../../constants/storage'
import { IStorage } from './IStorage'

// class sintaxe
// class Storage<T> implements IStorage<T> {
//   async get(key: string): Promise<T | null> {
//     const data = await AsyncStorage.getItem(key)

//     return data ? JSON.parse(data) : null
//   }

//   async set(key: string, value: T): Promise<void> {
//     const data = JSON.stringify(value)
//     await AsyncStorage.setItem(key, data)
//   }
// }

const storage: IStorage = {
  get: async <T>(key: STORAGE_KEY): Promise<T | null> => {
    const data = await AsyncStorage.getItem(STORAGE_KEY[key])

    return data ? JSON.parse(data) : null
  },

  set: async <T>(key: STORAGE_KEY, value: T): Promise<void> => {
    const data = JSON.stringify(value)
    await AsyncStorage.setItem(STORAGE_KEY[key], data)
  }
}

export { storage }
