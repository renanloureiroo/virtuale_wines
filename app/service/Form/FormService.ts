import {
  Control,
  DeepPartial,
  FieldErrors,
  useForm as useReactHookForm,
  UseFormProps as UseReactHookFormProps,
  UseFormTrigger
} from 'react-hook-form'
/* eslint-disable @typescript-eslint/explicit-function-return-type */

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
  options?: UseReactHookFormProps<T>
  defaultValues?: DeepPartial<T>
  validationSchema?: ObjectSchema<T>
  formatters?: Record<string, (value: any) => any>
}

interface IUseForm<T> {
  control: Control<T, any>
  handleSubmit: (any) => Promise<void>
  errors: FieldErrors<T>
  validate: UseFormTrigger<T>
  formatValue: (name: string, value: any) => any
}

export const useForm = <T extends FormData>(
  onSubmit: (data: T) => void,
  {
    options = {},
    validationSchema = {} as ObjectSchema<T>,
    defaultValues = {} as DeepPartial<T>,
    formatters
  }: UseFormProps<T>
): IUseForm<T> => {
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
    validate: trigger,
    formatValue
  }
}
