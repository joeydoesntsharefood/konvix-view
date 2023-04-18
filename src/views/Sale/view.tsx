import Button from "../../components/ui/Button";
import DatePicker from "../../components/ui/Datepicker";
import Divider from "../../components/ui/Divider";
import InputText from "../../components/ui/InputText";
import Select from "../../components/ui/Select";
import Typograph from "../../components/ui/Typograph";
import { Row } from "../Client/styles";
import { ActionsProduct, DescriptionProduct, ProductCard, WrapperProduct, WrapperProductList, WrapperSale } from "./styles";
import { ViewProps } from "./types";

const View = ({ handleValues, values, clientOptions, productList, addProduct, newProductValue, handleNewProduct, onSubmit }: ViewProps) => {
  return (
    <WrapperSale>
      <DatePicker
        label="Data da venda"
        name="createAt"
        onChange={handleValues}
        value={values?.createAt}
      />

      <Select
        label="Selecione um cliente"
        name="clientId"
        onChange={handleValues}
        value={String(values?.clientId)}
        options={[{ label: 'Escolha um cliente', value: '' }, ...clientOptions ?? []] ?? []}
      />

      <Divider />

      <WrapperProduct>
        <DescriptionProduct>
          <InputText
            name="name"
            label="Nome do produto"
            onChange={handleNewProduct}
            value={newProductValue?.name}
          />

          <InputText
            name="quantity"
            label="Quantidade de items"
            onChange={handleNewProduct}
            value={String(newProductValue?.quantity ?? 0)}
          />

          <InputText
            name="value"
            label="Valor unitário"
            onChange={handleNewProduct}
            value={String(newProductValue?.value ?? 0)}
          />
        </DescriptionProduct>

        <ActionsProduct>
          <Typograph>
            {Number(newProductValue?.quantity ?? 0) * Number(newProductValue?.value ?? 0)}
          </Typograph>

          <Button
            onClick={addProduct}
          >
            Adicionar produto
          </Button>
        </ActionsProduct>
      </WrapperProduct>

      <Divider />

      <WrapperProductList>
        {
          productList.map(value => 
            <ProductCard>
              <Row>
                <Typograph>Nome do produto:</Typograph>
                <Typograph>{value?.name}</Typograph>
              </Row>

              <Row>
                <Typograph>Quantidade:</Typograph>
                <Typograph>{value?.quantity}</Typograph>
              </Row>

              <Row>
                <Typograph>Valor unitário</Typograph>
                <Typograph>{value?.value}</Typograph>
              </Row>

              <Row>
                <Typograph>Valor total</Typograph>
                <Typograph>{value?.total}</Typograph>
              </Row>
            </ProductCard>
          )
        }
      </WrapperProductList>

      <Button
        onClick={onSubmit}
      >
        Gravar venda
      </Button>
    </WrapperSale>
  )
};

export default View;