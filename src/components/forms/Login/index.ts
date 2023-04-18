import { createElement, useState } from "react";
import View from "./view";
import { IAccess, IndexProps, ViewProps } from "./types";
import unAuthConsumer from "../../../consumers/unauth";

const Login = ({ handlePage, toDashboard }: IndexProps) => {
  const [values, setValues] = useState<IAccess>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleValues = (value: any) => setValues({ ...values, ...value });

  const onSubmit = async () => {
    setLoading(true);
    try {
      if (!values) throw new Error('Inserir dados de acesso.');

      const response = await unAuthConsumer.signin(values);

      if (response?.success) toDashboard();
    } catch (err: any) {
      console.log(err)
    }

    setLoading(false);
  };

  const viewProps: ViewProps = {
    onChange: handleValues,
    onSubmit,
    values,
    loading,
    handlePage,
    toDashboard
  };

  return createElement(View, viewProps);
};

export default Login;