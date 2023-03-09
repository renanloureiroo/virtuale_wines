import React, { FC } from 'react'
import {
  NavigationContainer,
  NavigatorScreenParams
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { defaultOptions } from '../shared/config/navigation/header'

import { useAppStackNavigationScreen } from './AppStackNavigation.hook'
import {
  AuthenticationStack,
  AuthenticationStackParamList
} from '../features/Authentication/navigation/AuthenticationStack'
import { Home } from '../features/Home/screens/Home'
import { Text } from 'react-native'
import { useAuth } from '../hooks/useAuth'

export type AppStackParamList = {
  authentication: NavigatorScreenParams<AuthenticationStackParamList>
  app: undefined
}

const { Navigator, Screen, Group } =
  createNativeStackNavigator<AppStackParamList>()

export const AppStackNavigation: FC = () => {
  const { hydrated, initialState, navigationRef, onChangeState, linking } =
    useAppStackNavigationScreen()

  const { user } = useAuth()

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
        {!user ? (
          <Group>
            <Screen
              component={AuthenticationStack}
              name={'authentication'}
            />
          </Group>
        ) : (
          <Group>
            <Screen
              component={Home}
              name={'app'}
            />
          </Group>
        )}
      </Navigator>
    </NavigationContainer>
  )
}
