import React, { ReactElement } from 'react'
import { StatusBar } from 'expo-status-bar'

import { AppStackNavigation } from './app/navigation/AppStackNavigation'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { MainProvider } from './app/contexts/provider'

import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export default function App(): ReactElement {
  GoogleSignin.configure({
    webClientId:
      '432269284896-c4gsuu6qu7tu1ho9ti1fapht2tb7th1c.apps.googleusercontent.com'
  })
  return (
    <MainProvider>
      <StatusBar style="auto" />
      <AppStackNavigation />
    </MainProvider>
  )
}
