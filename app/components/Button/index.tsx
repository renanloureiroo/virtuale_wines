import React, { FC } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'
import clsx from 'clsx'

type ButtonType = PressableProps & {
  variant?: 'default' | 'custom'
  size?: 'small' | 'medium' | 'large'
  title: string
}

export const Button: FC<ButtonType> = ({
  children,
  title,
  className,
  variant = 'default',
  size = 'medium'
}) => {
  if (variant === 'custom') {
    return (
      <Pressable
        className={clsx(
          'bg-rose-700 px-4 py-2 rounded-lg items-center justify-center w-full active:opacity-70',
          size === 'medium' ? 'h-12' : size === 'small' ? 'h-11' : 'h-14',
          className
        )}>
        {children}
      </Pressable>
    )
  }
  return (
    <Pressable
      className={clsx(
        'bg-rose-700 px-4 py-2 rounded-lg items-center justify-center w-full active:opacity-70',
        size === 'medium' ? 'h-12' : size === 'small' ? 'h-11' : 'h-14',
        className
      )}>
      <Text className={clsx('text-gray-50 text-lg font-bold')}>{title}</Text>
    </Pressable>
  )
}
