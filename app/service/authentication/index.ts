import { User } from '@react-native-google-signin/google-signin'

export interface ILoginCredentials {
  email: string
  password: string
}

export interface IAuthenticationService {
  login: (credentials?: ILoginCredentials) => Promise<User>
  signOut: () => void
}
