import { formatToBRL as formatBV } from 'brazilian-values'

export const formatToBRL = (value: string): string => {
  if (value) {
    const unFormattedValue = unFormatFromBRL(value)
    return formatBV(unFormattedValue)
  }

  return value
}

export const unFormatFromBRL = (value: string | number): number | null => {
  if (!value || value === 'R$ 0,00') return null

  if (typeof value === 'number') return value

  const valueNoCaracteres = value.replace(/[a-zA-Z$ ,.]/g, '')
  const valueString = (Number(valueNoCaracteres) / 100).toFixed(2)

  return Number(valueString)
}
