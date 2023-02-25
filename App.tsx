import React, { ReactElement } from 'react'
import { StatusBar } from 'expo-status-bar'
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AppStackNavigation } from './app/navigation/AppStackNavigation'

export default function App(): ReactElement {
  return (
    <GestureHandlerRootView className="flex-1">
      <FlipperAsyncStorage />
      <StatusBar style="auto" />
      <AppStackNavigation />
    </GestureHandlerRootView>
  )
}
