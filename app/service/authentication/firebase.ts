import { IAuthenticationService } from './index'

import {
  GoogleSignin,
  statusCodes,
  User
} from '@react-native-google-signin/google-signin'

const signInWithGoogle = async (): Promise<User> => {
  try {
    const res = await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true
    })
    console.log(res)
    const userInfo = await GoogleSignin.signIn()
    return userInfo
  } catch (error) {
    console.log(error)
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
}

export const AuthenticationFirebaseService: IAuthenticationService = {
  login: async () => {
    return await signInWithGoogle()
  },

  signOut: () => {
    console.log('signOut')
  }
}
