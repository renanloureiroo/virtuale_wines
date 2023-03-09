import AsyncStorage from '@react-native-async-storage/async-storage'
import { STORAGE_KEY } from '../../constants/storage'
import { IStorage } from './IStorage'

class Storage implements IStorage {
  async get<T>(key: STORAGE_KEY): Promise<T | null> {
    const data = await AsyncStorage.getItem(key)

    return data ? JSON.parse(data) : null
  }

  async set<T>(key: STORAGE_KEY, value: T): Promise<void> {
    const data = JSON.stringify(value)
    await AsyncStorage.setItem(key, data)
  }
}

export const storage = new Storage()
