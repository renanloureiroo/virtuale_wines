import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignIn } from '../features/Authentication/Screens/SignIn'
import { defaultOptions } from '../shared/config/navigation/header'

import { useAppStackNavigationScreen } from './AppStackNavigation.hook'

type AppStackParamList = {
  signIn: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>()

export const AppStackNavigation = () => {
  const { hydrated, initialState, navigationRef } =
    useAppStackNavigationScreen()

  if (!hydrated) {
    return null
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      initialState={initialState}>
      <Navigator screenOptions={defaultOptions}>
        <Screen
          component={SignIn}
          name={'signIn'}
        />
      </Navigator>
    </NavigationContainer>
  )
}
