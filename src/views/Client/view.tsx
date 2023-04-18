import Button from "../../components/ui/Button";
import InputText from "../../components/ui/InputText";
import Select from "../../components/ui/Select";
import Switch from "../../components/ui/Switch";
import Typograph from "../../components/ui/Typograph";
import { formatDate } from "../../utils/formatDate";
import { ClientCard, Row, WrapperAction, WrapperFilters, WrapperHeader, WrapperUserList, WrapperViewClients } from "./styles";
import { ViewProps } from "./types";

const View = ({ handleFilters, filters, handleMode, clients, search, onSearch, handleValueEdit, onDelete }: ViewProps) => {
  return (
    <WrapperViewClients>
      <WrapperHeader>
        <Button
          onClick={() => handleMode('create')}
        >
          Criar        
        </Button>

      </WrapperHeader>
      
      <Typograph>
        Ordernação
      </Typograph>
      
      <WrapperFilters>
        <Select
          label="Nome do cliente"
          name="des_nome"
          onChange={handleFilters}
          value={filters?.des_nome  ?? ''}
          options={[
            { value: '', label: 'Nenhuma' },
            { value: 'ASC', label: 'Nome: ASC' },
            { value: 'DESC', label: 'Nome: DESC' }]}
        />

        <Select
          label="Valor de venda acumulado"
          name="val_venda_acumulado"
          onChange={handleFilters}
          value={filters?.val_venda_acumulado ?? ''}
          options={[{ value: '', label: 'Nenhuma' }, { value: 'ASC', label: 'ASC' }, { value: 'DESC', label: 'DESC' }]}
        />

        <Select
          label="Data do ultimo pedido"
          name="dta_ult_pedido"
          onChange={handleFilters}
          value={filters?.dta_ult_pedido ?? ''}
          options={[{ value: 'DESC', label: 'DESC' }, { value: 'ASC', label: 'ASC' }, { value: '', label: 'Nenhuma' }]}
        />

      </WrapperFilters>

      <WrapperUserList>
        {
          clients?.map((value) => {
            return (
              <ClientCard>
                <Row>
                  <Typograph>Código do cliente:</Typograph>
                  <Typograph>{value?.cod_cliente ?? 'n/a'}</Typograph>
                </Row>

                <Row>
                  <Typograph>Nome do cliente:</Typograph>
                  <Typograph>{value?.des_nome ?? 'n/a'}</Typograph>
                </Row>

                <Row>
                  <Typograph>Ultímo pedido:</Typograph>
                  <Typograph>{value?.dta_ult_pedido ? formatDate(value?.dta_ult_pedido) : 'n/a'}</Typograph>
                </Row>

                <Row>
                  <Typograph>Valor de Venda Acumulado:</Typograph>
                  <Typograph>{value?.val_venda_acumulado ?? 'n/a'}</Typograph>
                </Row>

                <Row>
                  <Typograph>Quantidade de Pedidos de Vendas:</Typograph>
                  <Typograph>{value?.qtd_venda_pedidos ?? 'n/a'}</Typograph>
                </Row>

                <Row>
                  <Typograph>Inativo:</Typograph>
                  <Typograph>{value?.flg_inativo ? 'Sim' : 'Não'}</Typograph>
                </Row>

                <WrapperAction>
                  <Button
                    onClick={() => {
                      handleValueEdit(value);
                      handleMode('edit');
                    }}
                  >
                    Editar
                  </Button>

                  <Button
                    onClick={() => onDelete(value?.cod_cliente)}
                  >
                    Deletar
                  </Button>
                </WrapperAction>
              </ClientCard>
            );
          })
        }
      </WrapperUserList>
    </WrapperViewClients>
  );
};           

export default View;
