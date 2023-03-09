import { AuthenticationStackParamList } from './../../navigation/AuthenticationStack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../../../hooks/useAuth'

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
  const { signIn } = useAuth()

  const handleNavigateForSignUp = (): void => {
    push('signup')
  }

  const handleLogin = async (): Promise<void> => {
    return signIn()
  }

  return {
    handleNavigateForSignUp,
    handleLogin
  }
}
