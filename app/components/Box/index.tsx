/* eslint-disable react-native/no-inline-styles */
import { SafeAreaViewProps } from 'react-native-safe-area-context'
import React, { ComponentType, ReactElement, ReactNode } from 'react'
import {
  ScrollViewProps,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  View,
  ViewProps
} from 'react-native'

import { clsx } from 'clsx'

import { useBoxComponent } from './box.hook'

export type WrapperType = ComponentType<ViewProps | SafeAreaViewProps>

type BoxBaseProps<T> = {
  children: ReactNode

  /** Utiliza uma `ScrollView`. */
  scroll?: T

  safeArea?: boolean

  fullScreen?: boolean

  /** Se true renderiza um componente envolvo em um KeyboardAvoidingView */
  screen?: boolean

  /** Se verdadeiro, esconde o Keyboard no `onFocus` do navigation. */
  dismissKeyboard?: boolean
}

type BoxProps<T = false> = BoxBaseProps<T> &
  (T extends true ? ScrollViewProps : ViewProps)

/**
 * @description Component para containers
 * @param children ReactNode
 * @param className string
 * @returns View | SafeAreaView | ScrollView
 */

export function Box<T = false>({
  children,
  className,
  scroll,
  fullScreen = false,
  safeArea = false,
  screen = false,
  ...props
}: BoxProps<T>): ReactElement {
  const { Wrapper, bottomSpaceHeight, statusBarHeight } = useBoxComponent({
    safeArea
  })

  if (screen) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Wrapper
          style={{
            flex: 1
          }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className={'flex-1'}>
            <StatusBar
              backgroundColor="transparent"
              barStyle="dark-content"
              translucent
            />

            {scroll ? (
              <ScrollView
                style={{
                  paddingTop: !fullScreen ? statusBarHeight + 16 : 0,
                  paddingBottom: !fullScreen ? bottomSpaceHeight : 0
                }}
                className={clsx('flex-1', className)}
                keyboardShouldPersistTaps="handled"
                {...props}>
                {children}
              </ScrollView>
            ) : (
              <View
                style={{
                  paddingTop: !fullScreen ? statusBarHeight + 16 : 0,
                  paddingBottom: !fullScreen ? bottomSpaceHeight : 0
                }}
                className={clsx('flex-1', className)}
                {...props}>
                {children}
              </View>
            )}
          </KeyboardAvoidingView>
        </Wrapper>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View
      className={className}
      {...props}>
      {children}
    </View>
  )
}
