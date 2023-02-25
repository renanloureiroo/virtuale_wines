import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { FC } from 'react'

import { Text } from 'react-native'
import { Box } from '../../../../components/Box'
import { Button } from '../../../../components/Button'
import { AppStackParamList } from '../../../../navigation/AppStackNavigation'

type HomeScreenProps = NativeStackScreenProps<AppStackParamList, 'app'>

export const Home: FC<HomeScreenProps> = () => {
  return (
    <Box screen>
      <Text className="text-purple-600"> Home Screen</Text>

      <Button title="Entrar" />
    </Box>
  )
}
