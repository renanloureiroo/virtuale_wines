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

export const useSignUpScreen = () => {
  const { navigate } = useNavigation<SignUpNavigationPropType>()

  const { params } = useRoute<SignUpRouteParamsType>()

  const id = params?.id || ''

  const handleNavigateForAppHome = () => {
    navigate('app')
  }

  return { handleNavigateForAppHome, id }
}
