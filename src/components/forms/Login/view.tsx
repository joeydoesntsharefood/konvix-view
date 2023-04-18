import Button from "../../ui/Button";
import InputPassword from "../../ui/InputPassword";
import InputText from "../../ui/InputText";
import SubmitButton from "../../ui/SubmitButton";
import { WrapperLoginForm } from "./styles";
import { ViewProps } from "./types";

const View = ({ onChange, onSubmit, values, loading, handlePage }: ViewProps) => {
  return (
    <WrapperLoginForm>
      <InputText
        label="E-mail"
        name="email"
        onChange={onChange}
        value={values?.email}
      />
      
      <InputPassword
        label="Senha"
        name="password"
        onChange={onChange}
        value={values?.password}
      />

      <SubmitButton
        loading={loading}
        onClick={onSubmit}
      >
        Acessar
      </SubmitButton>

      <Button
        onClick={handlePage}
      >
        Registrar-se
      </Button>
    </WrapperLoginForm>
  )
};

export default View;