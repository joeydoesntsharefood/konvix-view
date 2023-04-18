export interface ISale {
  id: number
  clientId: number
  createAt: string
  total: number
}

export interface IProduct {
  name: string
  value: number
  quantity: number
  total: number
  createAt: string
}

export interface IDbaProduct {
  'cod_item'?: number
  'cod_venda'?: number;
  'des_produto': string;
  'val_unitario': number;
  'qtd_itens': number;
  'val_total': number;
  'dta_cadastro': string;
}

export interface Sale {
  'cod_venda'?: number;
  'cod_cliente': number;
  'dta_venda': string;
  'val_total_venda': number;
  products: Array<IDbaProduct>
}

export interface ViewProps {
  values?: ISale
  handleValues(value: any): void
  clientOptions?: Array<{ value: string, label: string }>
  addProduct(): void
  productList: Array<IProduct>
  newProductValue?: IProduct
  handleNewProduct(value: any): void
  onSubmit(): void
}