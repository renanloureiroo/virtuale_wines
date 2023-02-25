import { AuthenticationStackParamList } from './../../navigation/AuthenticationStack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import {
  CompositeNavigationProp,
  useRoute,
  RouteProp,
  useNavigation
} from '@react-navigation/native'
import { AppStackParamList } from '../../../../navigation/AppStackNavigation'

type SignUpNavigationPropType = CompositeNavigationProp<
  NativeStackNavigationProp<AppStackParamList, 'app'>,
  NativeStackNavigationProp<AuthenticationStackParamList, 'signup'>
>

type SignUpRouteParamsType = RouteProp<AuthenticationStackParamList, 'signup'>

interface IUseSignUpScreen {
  handleNavigateForAppHome: () => void
  id?: string
}

export const useSignUpScreen = (): IUseSignUpScreen => {
  const { navigate } = useNavigation<SignUpNavigationPropType>()

  const { params } = useRoute<SignUpRouteParamsType>()

  const id = params?.id || ''

  const handleNavigateForAppHome = (): void => {
    navigate('app')
  }

  return { handleNavigateForAppHome, id }
}
