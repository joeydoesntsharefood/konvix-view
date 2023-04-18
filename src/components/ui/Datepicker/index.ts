import { createElement } from 'react'
import { IIndexProps } from './types'
import View from './view'

const DatePicker = ({
  label,
  name,
  onChange,
  value,
}: IIndexProps) => {
  return createElement(View, {
    label,
    name,
    onChange,
    value,
  })
}

export default DatePicker