import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Text className="text-purple-700">
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  )
}
