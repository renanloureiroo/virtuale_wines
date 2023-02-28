import { AuthenticationFirebaseService } from './../../../../service/authentication/firebase'
import { AuthenticationStackParamList } from './../../navigation/AuthenticationStack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

type SignInType = NativeStackNavigationProp<
  AuthenticationStackParamList,
  'signin'
>

interface IUseSignInScreen {
  handleNavigateForSignUp: () => void
  handleLogin: () => Promise<void>
}

export const useSignInScreen = (): IUseSignInScreen => {
  const { push } = useNavigation<SignInType>()

  const handleLogin = (): Promise<void> => {
    return AuthenticationFirebaseService.login()
  }

  const handleNavigateForSignUp = (): void => {
    push('signup')
  }

  return {
    handleNavigateForSignUp,
    handleLogin
  }
}
