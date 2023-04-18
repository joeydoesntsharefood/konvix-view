import { Sale } from "../Sale/types";

export type DataSourceSales = Array<Sale & { des_nome_cliente?: string, des_cidade_cliente: string, des_uf_cliente: string }>

export interface ViewProps {
  dataSource: DataSourceSales
  filters?: {
    startAt: string
    endAt: string
  }
  handleFilters(value: any): void
}