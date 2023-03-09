import React, { FC } from 'react'
import { Text as RNText, TextProps as RNTextProps } from 'react-native'

type TextProps = RNTextProps

export const Text: FC<TextProps> = ({ className, children, ...props }) => {
  return (
    <RNText
      className={className}
      {...props}>
      {children}
    </RNText>
  )
}
