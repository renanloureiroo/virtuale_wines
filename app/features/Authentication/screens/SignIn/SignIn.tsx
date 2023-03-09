import React, { FC, ReactElement } from 'react'
import { GoogleSigninButton } from '@react-native-google-signin/google-signin'

import { Box } from '../../../../components/Box'
import { useForm } from '../../../../service/Form/FormService'

import * as yup from 'yup'
import { formatToBRL } from '../../../../shared/utils/formatters/formatToBRL'
import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'

import { User } from 'phosphor-react-native'
import { Icon } from '../../../../components/Icon'
import { useSignInScreen } from './SignIn.hook'

const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido!').required('Campo obrigatório!'),
  password: yup
    .string()
    .min(8, 'Mínimo de 8 caracteres!')
    .required('Campo obrigatório!')
})

type FormDataType = {
  email: string
  password: string
}

export const SignIn: FC<ReactElement> = () => {
  const { handleLogin } = useSignInScreen()

  const onSubmit = (data: FormDataType): void => console.log(data)

  const { handleSubmit, ...props } = useForm<FormDataType>(onSubmit, {
    validationSchema: schema,
    formatters: {
      price: formatToBRL
    },
    options: {
      delayError: 500
    }
  })

  return (
    <Box
      screen
      className="bg-brand-background px-4 justify-end">
      <Input
        form={props}
        name="email"
        autoCapitalize="none"
        placeholder="E-mail"
        autoCorrect={false}
        leftIcon={
          <Icon
            Icon={User}
            color="gray"
            size={24}
          />
        }
        className="mb-4"
      />
      <Input
        name="password"
        form={props}
        autoCapitalize="none"
        autoCorrect={false}
        variant="password"
        placeholder={'Senha'}
        keyboardType={'numeric'}
        className="mb-8"
      />

      <Button
        onPress={handleSubmit}
        title="Entrar"
      />

      <Box className="w-full h-[1px] bg-gray-300 my-6" />

      <Box className="flex-row w-full items-center justify-center">
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Icon}
          onPress={handleLogin}
        />
      </Box>
    </Box>
  )
}
