export interface Props {
  value: string
  name: string
  onChange(value: any): void
  options: Array<{ label: string, value: string }>
  label: string
}