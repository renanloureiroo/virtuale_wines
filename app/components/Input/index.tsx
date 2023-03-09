import clsx from 'clsx'
import { Eye, EyeClosed } from 'phosphor-react-native'
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  ReactElement,
  useState
} from 'react'
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger
} from 'react-hook-form'
import { Pressable, TextInput, TextInputProps } from 'react-native'
import { Box } from '../Box'
import { Icon } from '../Icon'
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
  onBlurAction?: () => void
  variant?: 'default' | 'password'
}

const Base: ForwardRefRenderFunction<TextInput, InputProps> = (
  {
    form,
    name,
    validateOnChange = false,
    variant = 'default',
    onBlurAction,
    onSubmitEditing,
    leftIcon,
    ...props
  },
  ref
) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const error = form.errors[name] ?? false
  const messageError = (form.errors[name]?.message as string) ?? ''

  const handleToggleVisibility = (): void => {
    setIsVisible((state) => !state)
  }

  if (variant === 'password') {
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
                textContentType={'password'}
                secureTextEntry={!isVisible}
                onChangeText={(text): void => {
                  onChange(form.formatValue(name, text))
                  if (validateOnChange) {
                    form.validate(name)
                  }
                }}
                onBlur={(): void => {
                  onBlur()

                  onBlurAction && onBlurAction()
                }}
                onSubmitEditing={onSubmitEditing}
                value={value}
                className={clsx('flex-1 bg-transparent px-2')}
                {...props}
              />
              <Pressable onPress={handleToggleVisibility}>
                <Icon Icon={isVisible ? Eye : EyeClosed} />
              </Pressable>
            </Box>

            {error && messageError && <Text>{messageError}</Text>}
          </>
        )}
      />
    )
  }

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
              onBlur={(): void => {
                onBlur()

                onBlurAction && onBlurAction()
              }}
              onSubmitEditing={onSubmitEditing}
              value={value}
              className={clsx('flex-1 bg-transparent px-2')}
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
