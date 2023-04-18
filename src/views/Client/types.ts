import { IClient } from "../../components/forms/RegisterClient/types"

export type mode = 'view' | 'create' | 'edit'

export interface IUser {
  id: number
  name: string
  address: string
  city: string
  number: number
  uf: string
  phone: string
  contact: string
  status: boolean
  totalBuy?: number
  totalSales?: number
  lastSale?: string
  createAt: string
  updateAt?: string
}

export interface ViewProps {
  handleFilters(value: any): void
  filters: any
  search?: string
  onSearch(value: any): void
  clients?: Array<IClient>
  currentMode: mode
  handleMode(value: mode): void
  getClients(value: string): void
  valueEdit?: IClient
  handleValueEdit(value: any): void
  onDelete(id: number): void
}
