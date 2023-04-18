export interface ViewProps {
  name: string
  value?: string
  onChange(value: Record<string, string>): void
  label: string
}