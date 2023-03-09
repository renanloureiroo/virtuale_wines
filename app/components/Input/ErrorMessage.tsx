import React, { FC } from 'react'
import Animated, { LightSpeedInLeft } from 'react-native-reanimated'

interface ErrorMessageProps {
  error?: boolean
  messageError?: string
}
export const ErrorMessage: FC<ErrorMessageProps> = ({
  error = false,
  messageError
}) => {
  if (!error && !messageError) {
    return null
  }
  return (
    <Animated.Text
      entering={LightSpeedInLeft}
      exiting={LightSpeedInLeft}
      className="text-red-500 pl-4 mt-2">
      {messageError}
    </Animated.Text>
  )
}
