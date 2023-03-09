import React, { FC } from 'react'
import { ViewProps } from 'react-native'
import clsx from 'clsx'
import { Box } from '../Box'

export const Root: FC<ViewProps> = ({ children, className }) => {
  return (
    <Box
      className={clsx(
        'h-14 rounded-full bg-white px-4 w-full  flex-row items-center',
        className
      )}>
      {children}
    </Box>
  )
}
