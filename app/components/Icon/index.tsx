import React, { FC } from 'react'
import { IconProps as PIconsProps, User } from 'phosphor-react-native'
import { styled } from 'nativewind'

type IconProps = PIconsProps & {
  Icon: typeof User
  className?: string
}

export const Icon: FC<IconProps> = ({ Icon, className, ...props }) => {
  const StyledIcon = styled(Icon)

  return (
    <StyledIcon
      className={className}
      {...props}
    />
  )
}
