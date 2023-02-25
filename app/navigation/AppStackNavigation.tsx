import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { defaultOptions } from '../shared/config/navigation/header'

import { useAppStackNavigationScreen } from './AppStackNavigation.hook'
import { AuthenticationStack } from '../features/Authentication/navigation/AuthenticationStack'
import { Home } from '../features/Home/screens/Home'
import { Text } from 'react-native'

export type AppStackParamList = {
  authentication: undefined
  app: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>()

export const AppStackNavigation: FC = () => {
  const { hydrated, initialState, navigationRef, onChangeState, linking } =
    useAppStackNavigationScreen()

  if (!hydrated) {
    return null
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      initialState={initialState}
      onStateChange={(state): void => {
        console.log(state)
        onChangeState(state)
      }}
      linking={linking}
      fallback={<Text>Loading...</Text>}>
      <Navigator screenOptions={defaultOptions}>
        <Screen
          component={AuthenticationStack}
          name={'authentication'}
        />

        <Screen
          component={Home}
          name={'app'}
        />
      </Navigator>
    </NavigationContainer>
  )
}
