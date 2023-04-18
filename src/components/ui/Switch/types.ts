interface Props<T> {
  value: T
  onChange(value: any): void
  label: string
  name: string
}

export type ViewProps = Props<string>

export type IndexProps = Props<boolean | undefined>