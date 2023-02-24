import { AuthenticationStackParamList } from './../../navigation/AuthenticationStack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

type SignInType = NativeStackNavigationProp<
  AuthenticationStackParamList,
  'signin'
>

export const useSignInScreen = () => {
  const { push } = useNavigation<SignInType>()

  const handleNavigateForSignUp = () => {
    push('signup')
  }

  return {
    handleNavigateForSignUp
  }
}
