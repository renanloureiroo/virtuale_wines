/* eslint-disable @typescript-eslint/explicit-function-return-type */

import {
  DeepPartial,
  useForm as useReactHookForm,
  UseFormProps as UseReactHookFormProps
} from 'react-hook-form'
import { ObjectSchema } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type FormData = Record<string, any>

// type UseFormType<T> = {
//   // register: UseFormRegister<T>
//   control: Control<T>
//   handleSubmit: any
//   errors: FieldErrors<T>
// }

interface UseFormProps<T> {
  // onSubmit: (data: T) => void
  options?: UseReactHookFormProps<T>
  defaultValues?: DeepPartial<T>
  validationSchema?: ObjectSchema<T>
  formatters?: Record<string, (value: any) => any>
}

export const useForm = <T extends FormData>(
  onSubmit: (data: T) => void,
  {
    options = {},
    validationSchema = {} as ObjectSchema<T>,
    defaultValues = {} as DeepPartial<T>,
    formatters
  }: UseFormProps<T>
) => {
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useReactHookForm<T>({
    defaultValues,
    resolver: yupResolver(validationSchema),
    ...options
  })

  const formatValue = (name: string, value: any) => {
    const formatter = formatters?.[name]
    return formatter ? formatter(value) : value
  }

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    trigger,
    formatValue
  }
}
