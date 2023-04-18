import { mode } from "../../../views/Client/types"

export interface IndexProps {
  currentMode: mode;
  handleMode(value: mode): void;
  getClients(value: string): void
  valueEdit: IClient
};

export interface ViewProps {
  currentMode: mode;
  values?: IClient
  handleValues(value: any): void
  onBack(): void
  confirmText: string
  onSubmit(): void
};

export interface IClient {
  'cod_cliente': number;
  'des_nome': string;
  'flg_inativo': boolean;
  'des_endereco': string;
  'num_endereco': string;
  'des_cidade': string;
  'des_uf': string;
  'des_telefone': string;
  'des_contato': string;
  'val_venda_acumulado': number;
  'qtd_venda_pedidos': number;
  'dta_ult_pedido': string;
  'dta_cadastro': string;
  'dta_alteracao': string; 
}