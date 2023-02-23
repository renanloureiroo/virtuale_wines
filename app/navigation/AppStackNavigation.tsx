import React from 'react'
import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignIn } from '../features/Authentication/Screens/SignIn'
import { useFlipper } from '@react-navigation/devtools'
import { defaultOptions } from '../shared/config/navigation/header'

type AppStackParamList = {
  signIn: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>()

export const AppStackNavigation = () => {
  const navigationRef = useNavigationContainerRef()

  useFlipper(navigationRef)

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator screenOptions={defaultOptions}>
        <Screen
          component={SignIn}
          name={'signIn'}
        />
      </Navigator>
    </NavigationContainer>
  )
}
