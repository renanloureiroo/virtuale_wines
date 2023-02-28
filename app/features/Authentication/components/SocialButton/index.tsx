import React, { FC } from 'react'
import { ButtonIcon } from '../../../../components/ButtonIcon'

import Google from '../../../../assets/google.png'
import Apple from '../../../../assets/apple.png'
import { Image, PressableProps } from 'react-native'

type SocialButtonType = PressableProps & {
  type?: 'google' | 'apple'
}

export const SocialButton: FC<SocialButtonType> = ({
  type = 'google',
  ...props
}) => {
  const source = type === 'google' ? Google : Apple

  return (
    <ButtonIcon
      className="m-1"
      {...props}>
      <Image
        source={source}
        className={'w-full h-full flex-1'}
      />
    </ButtonIcon>
  )
}
