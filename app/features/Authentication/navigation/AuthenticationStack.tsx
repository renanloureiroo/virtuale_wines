import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { defaultOptions } from '../../../shared/config/navigation/header'
import { SignIn } from '../screens/SignIn/SignIn'
import { SignUp } from '../screens/SignUp/SignUp'

export type AuthenticationStackParamList = {
  signin: undefined
  signup: {
    id?: string
  }
}

const { Navigator, Screen } =
  createNativeStackNavigator<AuthenticationStackParamList>()

export const AuthenticationStack = () => {
  return (
    <Navigator
      screenOptions={defaultOptions}
      initialRouteName={'signin'}>
      <Screen
        component={SignIn}
        name={'signin'}
      />
      <Screen
        component={SignUp}
        name={'signup'}
      />
    </Navigator>
  )
}
