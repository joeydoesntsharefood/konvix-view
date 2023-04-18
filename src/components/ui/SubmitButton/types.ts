export interface ViewProps {
  onClick(): void
  children: string
  loading: boolean
  disabled?: boolean
}