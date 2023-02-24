import { STORAGE_KEY } from '../../constants/storage'

export interface IStorage<T = any> {
  get: (key: STORAGE_KEY) => Promise<T | null>
  set: (key: STORAGE_KEY, value: T) => Promise<void>
}
