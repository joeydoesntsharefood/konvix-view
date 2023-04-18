import Button from "../../ui/Button";
import InputPassword from "../../ui/InputPassword";
import InputText from "../../ui/InputText";
import SubmitButton from "../../ui/SubmitButton";
import { WrapperRegisterForm } from "./styles";
import { ViewProps } from "./types";

const View = ({ handlePage, loading, onChange, values, onSubmit }: ViewProps) => {
  return (
    <WrapperRegisterForm>
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

      <InputPassword
        label="Confirme sua Senha"
        name="confirmPassword"
        onChange={onChange}
        value={values?.confirmPassword}
      />

      <SubmitButton
        onClick={onSubmit}
        loading={loading}
      >
        Registrar-se
      </SubmitButton>
      <Button
        onClick={handlePage}
      >
        Voltar
      </Button>
    </WrapperRegisterForm>
  )
};

export default View;