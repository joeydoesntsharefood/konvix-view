export interface IUser {
  id?: number
  email: string
  password?: string
  status: string
}

export interface IndexProps {
  handlePage(): void
}

export interface ViewProps extends IndexProps {
  loading: boolean
  values?: IUser & { confirmPassword?: string }
  onChange(value: any): void
  onSubmit(): void
}