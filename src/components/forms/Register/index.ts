import { createElement, useState } from "react";
import { IUser, IndexProps, ViewProps } from "./types";
import View from "./view";
import unAuthConsumer from "../../../consumers/unauth";
import { errorSelector } from "recoil";

const Register = ({ handlePage  }: IndexProps) => {
  const [values, setValues] = useState<IUser & { confirmPassword?: string }>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleValues = (value: any) => setValues({ ...values, ...value });

  const handleLoading = () => setLoading(!loading);

  const onSubmit = async () => {
    const formatedValues = values;
    delete formatedValues?.confirmPassword;
    try {
      if (!formatedValues) throw new Error('Insira dados válidos para criar seu usuário.');
      if (!values?.password) throw new Error('Insira uma senha válida.');

      const response = await unAuthConsumer.signup(formatedValues);

      console.log(response);
    } catch (err: any) {
      console.log(err);
    }
  }

  const viewProps: ViewProps = {
    handlePage,
    loading,
    onChange: handleValues,
    onSubmit,
    values
  };

  return createElement(View, viewProps);
};

export default Register;