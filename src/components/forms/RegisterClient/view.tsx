import Button from "../../ui/Button";
import InputText from "../../ui/InputText";
import SubmitButton from "../../ui/SubmitButton";
import Switch from "../../ui/Switch";
import { ViewProps } from "./types";

const View = ({ confirmText, onBack, handleValues, onSubmit, values, currentMode }: ViewProps) => {
  return (
    <>
      <InputText
        label="Nome"
        name="des_nome"
        onChange={handleValues}
        value={values?.des_nome}
      />
      
      <InputText
        label="Endereço"
        name="des_endereco"
        onChange={handleValues}
        value={values?.des_endereco}
      />

      <InputText
        label="Número"
        name="num_endereco"
        onChange={handleValues}
        value={values?.num_endereco}
      />

      <InputText
        label="Cidade"
        name="des_cidade"
        onChange={handleValues}
        value={values?.des_cidade}
      />

      <InputText
        label="UF"
        name="des_uf"
        onChange={handleValues}
        value={values?.des_uf}
      />

      <InputText
        label="Contato"
        name="des_contato"
        onChange={handleValues}
        value={values?.des_contato}
      />

      <InputText
        label="Telefone"
        name="des_telefone"
        onChange={handleValues}
        value={values?.des_telefone}
      />

      { currentMode === 'edit' &&
        <Switch
          name="flg_inativo"
          value={values?.flg_inativo}
          label="Usuário inativo?"
          onChange={handleValues}
        />
      }

      <SubmitButton
        loading={false}
        disabled={false}
        onClick={onSubmit}
      >
        {confirmText}
      </SubmitButton>
      
      <Button
        onClick={onBack}
      >
        Voltar
      </Button>
    </>
  )
};

export default View;