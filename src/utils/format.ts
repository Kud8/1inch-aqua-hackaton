const defaultCurrencyFormatter = (options?: Intl.NumberFormatOptions) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 1,
    ...options,
  })

const compactNumberFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
})

export const formatCurrency = (value: number, options?: Intl.NumberFormatOptions) => {
  const formatter = defaultCurrencyFormatter(options)
  return formatter.format(value)
}

export const formatCompactCurrency = (value: number) =>
  defaultCurrencyFormatter({ maximumFractionDigits: 0 }).format(value)

export const formatCompactNumber = (value: number) => compactNumberFormatter.format(value)

export const formatPercent = (value: number, digits = 1) => `${value.toFixed(digits)}%`

