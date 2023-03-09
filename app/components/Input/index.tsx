import clsx from 'clsx'
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  ReactElement
} from 'react'
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger
} from 'react-hook-form'
import { TextInput, TextInputProps } from 'react-native'
import { Box } from '../Box'
import { Text } from '../Text'

type FormType = {
  control: Control<any, any>
  validate: UseFormTrigger<any>
  errors: FieldErrors<any>
  formatValue: (name: string, value: any) => any
  validateOnChange?: boolean
}

interface InputProps extends TextInputProps {
  form: FormType
  name: string
  validateOnChange?: boolean
  leftIcon?: ReactElement
}

const Base: ForwardRefRenderFunction<TextInput, InputProps> = (
  { form, name, validateOnChange = false, leftIcon, ...props },
  ref
) => {
  const error = form.errors[name] ?? false
  const messageError = (form.errors[name]?.message as string) ?? ''

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field: { onChange, onBlur, value } }): ReactElement => (
        <>
          <Box className="h-14 rounded-full bg-white px-4 w-full flex flex-row items-center">
            {leftIcon}
            <TextInput
              ref={ref}
              onChangeText={(text): void => {
                onChange(form.formatValue(name, text))
                if (validateOnChange) {
                  form.validate(name)
                }
              }}
              onBlur={onBlur}
              value={value}
              className={clsx('flex-1 bg-transparent')}
              {...props}
            />
          </Box>

          {error && messageError && <Text>{messageError}</Text>}
        </>
      )}
    />
  )
}
export const Input = forwardRef(Base)
