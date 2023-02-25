import React, { FC, ReactElement } from 'react'
import { Button, Text, View } from 'react-native'
import { useSignUpScreen } from './SignUp.hook'

export const SignUp: FC<ReactElement> = () => {
  const { handleNavigateForAppHome, id } = useSignUpScreen()
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-purple-600"> SignUp Screen</Text>
      <Text className="text-purple-600">{id}</Text>

      <Button
        title="Go Home"
        onPress={handleNavigateForAppHome}
      />
    </View>
  )
}
