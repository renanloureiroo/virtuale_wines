import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <NavigationContainer>
        <View className="flex-1 justify-center items-center">
          <Text className="text-purple-700">
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
