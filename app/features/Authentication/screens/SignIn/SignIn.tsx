import React, { FC, ReactElement } from 'react'
import { Button, Text, View } from 'react-native'
import { useSignInScreen } from './SignIn.hook'

export const SignIn: FC<ReactElement> = () => {
  const { handleNavigateForSignUp } = useSignInScreen()

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-purple-600"> SignIn Screen</Text>

      <Button
        title="SignUp"
        onPress={handleNavigateForSignUp}
      />
    </View>
  )
}
