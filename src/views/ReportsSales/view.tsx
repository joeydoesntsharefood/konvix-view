import DatePicker from "../../components/ui/Datepicker";
import Typograph from "../../components/ui/Typograph";
import { formatDate } from "../../utils/formatDate";
import { TableColumn, TableRow, WrapperProducts, WrapperReport, WrapperFilter, WrapperTable, WrapperTableCard } from "./styles";
import { ViewProps } from "./types";

const View = ({ dataSource, filters, handleFilters }: ViewProps) => {
  const idColumn = { width: '10%' };
  const dateColumn = { width: '20%' };
  const nameColumn = { width: '40%' };
  const valueColumn = { width: '20%' };

  return (
    <WrapperReport>
      <WrapperFilter>
        <DatePicker
          label="Data Início"
          name="startAt"
          onChange={handleFilters}
          value={filters?.startAt}
        />

        <DatePicker
          label="Data Início"
          name="endAt"
          onChange={handleFilters}
          value={filters?.endAt}
        />
      </WrapperFilter>

      { Array.isArray(dataSource) &&
        <WrapperTable>
          <TableRow>
            <TableColumn style={idColumn}>
              <Typograph>Código da venda</Typograph>
            </TableColumn>

            <TableColumn style={dateColumn}>
              <Typograph>Data da venda</Typograph>
            </TableColumn>

            <TableColumn style={nameColumn}>
              <Typograph>Nome do cliente</Typograph>
            </TableColumn>

            <TableColumn>
              <Typograph>Cidade</Typograph>
            </TableColumn>

            <TableColumn>
              <Typograph>UF</Typograph>
            </TableColumn>
          </TableRow>

          <WrapperTableCard>
            {
              dataSource.map(value => (
                <>
                  <TableRow>
                    <TableColumn style={idColumn}>
                      <Typograph>{value?.cod_venda}</Typograph>
                    </TableColumn>
                    
                    <TableColumn style={dateColumn}>
                      <Typograph>{formatDate(value?.dta_venda)}</Typograph>
                    </TableColumn>
                    
                    <TableColumn style={nameColumn}>
                      <Typograph>{value?.des_nome_cliente}</Typograph>
                    </TableColumn>

                    <TableColumn>
                      <Typograph>{value?.des_cidade_cliente}</Typograph>
                    </TableColumn>

                    <TableColumn>
                      <Typograph>{value?.des_uf_cliente}</Typograph>
                    </TableColumn>
                  </TableRow>

                  
                  { value?.products.length !== 0 &&
                    <WrapperProducts>
                      <TableRow>
                        <TableColumn style={idColumn}>
                          <Typograph>Código do item</Typograph>
                        </TableColumn>
                        <TableColumn style={nameColumn}>
                          <Typograph>Nome do produto</Typograph>
                        </TableColumn>
                        <TableColumn style={valueColumn}>
                          <Typograph>Valor unitário</Typograph>
                        </TableColumn>
                        <TableColumn>
                          <Typograph>Quantidade</Typograph>
                        </TableColumn>
                        <TableColumn style={valueColumn}>
                          <Typograph>Valor total</Typograph>
                        </TableColumn>
                      </TableRow>

                      {
                        value?.products?.map((value) => (
                          <TableRow>
                            <TableColumn style={idColumn}>
                              <Typograph>{value?.cod_item}</Typograph>
                            </TableColumn>

                            <TableColumn style={nameColumn}>
                              <Typograph>{value?.des_produto}</Typograph>
                            </TableColumn>

                            <TableColumn style={valueColumn}>
                              <Typograph>{value?.val_unitario}</Typograph>
                            </TableColumn>

                            <TableColumn>
                              <Typograph>{value?.qtd_itens}</Typograph>
                            </TableColumn>

                            <TableColumn style={valueColumn}>
                              <Typograph>{value?.val_total}</Typograph>
                            </TableColumn>
                          </TableRow>
                        ))
                      }
                    </WrapperProducts>
                  }
                </>
              ))
            }
          </WrapperTableCard>
        </WrapperTable>
      }
    </WrapperReport>
  )
};

export default View;