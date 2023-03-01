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

type FormType = {
  control: Control<any, any>
  trigger: UseFormTrigger<any>
  errors: FieldErrors<any>
  formatValue: (name: string, value: any) => any
  validateOnChange?: boolean
}

interface InputProps extends TextInputProps {
  form: FormType
  name: string
  validateOnChange?: boolean
}

const Base: ForwardRefRenderFunction<TextInput, InputProps> = (
  { form, name, validateOnChange = false, ...props },
  ref
) => {
  const error = form.errors[name] ?? false
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field: { onChange, onBlur, value } }): ReactElement => (
        <TextInput
          ref={ref}
          onChangeText={(text): void => {
            onChange(form.formatValue(name, text))
            if (validateOnChange) {
              form.trigger(name)
            }
          }}
          onBlur={onBlur}
          value={value}
          className={clsx(
            'bg-white border border-gray-500 rounded-none mb-2',
            !!error && 'border-red-500'
          )}
          {...props}
        />
      )}
    />
  )
}
export const Input = forwardRef(Base)
