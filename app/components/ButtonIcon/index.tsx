import clsx from 'clsx'
import React, { FC } from 'react'
import { Pressable, PressableProps } from 'react-native'

type ButtonIconType = PressableProps & {
  size?: 'small' | 'medium' | 'large'
}

export const ButtonIcon: FC<ButtonIconType> = ({
  children,
  size = 'medium',
  className,
  ...props
}) => {
  return (
    <Pressable
      className={clsx(
        'rounded-lg shadow-lg p-3 bg-white active:opacity-60',
        size === 'medium'
          ? 'h-12 w-12'
          : size === 'small'
          ? 'h-11 w-11'
          : 'h-14 w-14',
        className
      )}
      {...props}>
      {children}
    </Pressable>
  )
}
