export interface IAccess {
  email: string
  password: string
}

export interface ViewProps extends IndexProps {
  values?: IAccess
  onChange(value: {}): void
  onSubmit(): void
  loading: boolean
}

export interface IndexProps {
  handlePage(): void
  toDashboard(): void
}