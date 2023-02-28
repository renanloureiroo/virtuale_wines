export interface ILoginCredentials {
  email: string
  password: string
}

export interface IAuthenticationService {
  login: (credentials?: ILoginCredentials) => Promise<void>
  signOut: () => void
}
