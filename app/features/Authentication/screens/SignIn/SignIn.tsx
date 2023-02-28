import React, { FC, ReactElement } from 'react'
import { Text, View } from 'react-native'
import { Box } from '../../../../components/Box'
import { SocialButton } from '../../components/SocialButton'
import { useSignInScreen } from './SignIn.hook'

export const SignIn: FC<ReactElement> = () => {
  const { handleLogin } = useSignInScreen()
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-purple-600"> SignIn Screen</Text>

      <Box className="flex-row">
        <SocialButton onPress={handleLogin} />
        <SocialButton type="apple" />
      </Box>
    </View>
  )
}
