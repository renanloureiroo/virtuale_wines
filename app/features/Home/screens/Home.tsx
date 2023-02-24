import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { FC } from 'react'

import { Text, View } from 'react-native'
import { AppStackParamList } from '../../../navigation/AppStackNavigation'

type HomeScreenProps = NativeStackScreenProps<AppStackParamList, 'app'>

export const Home: FC<HomeScreenProps> = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-purple-600"> Home Screen</Text>
    </View>
  )
}
