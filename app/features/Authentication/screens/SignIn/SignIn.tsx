import React, { FC, ReactElement } from 'react'

import { Box } from '../../../../components/Box'
import { useForm } from '../../../../service/Form/FormService'

import * as yup from 'yup'
import { formatToBRL } from '../../../../shared/utils/formatters/formatToBRL'
import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'

import { User } from 'phosphor-react-native'
import { Icon } from '../../../../components/Icon'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  price: yup.string().required()
})

type FormDataType = {
  email: string
  price: string
}

export const SignIn: FC<ReactElement> = () => {
  // const { handleLogin } = useSignInScreen()

  const onSubmit = (data: FormDataType): void => console.log(data)

  const { handleSubmit, ...props } = useForm<FormDataType>(onSubmit, {
    validationSchema: schema,
    formatters: {
      price: formatToBRL
    },
    options: {}
  })

  return (
    <Box
      screen
      className="bg-brand-background px-4">
      <Input
        form={props}
        name="email"
        leftIcon={<Icon Icon={User} />}
      />
      <Input
        name="price"
        form={props}
        placeholder={'R$ 00,00'}
        keyboardType={'numeric'}
      />

      <Button
        onPress={handleSubmit}
        title="Entrar"
      />
    </Box>
  )
}
