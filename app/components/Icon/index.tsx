import React, { FC } from 'react'
import { IconProps as PIconsProps, User } from 'phosphor-react-native'

type IconProps = PIconsProps & {
  Icon: typeof User
}

export const Icon: FC<IconProps> = ({ Icon, ...props }) => {
  return <Icon {...props} />
}
