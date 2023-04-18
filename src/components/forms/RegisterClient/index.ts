import { createElement, useState } from "react";
import View from "./view";
import { IClient, IndexProps, ViewProps } from "./types";
import { mode } from "../../../views/Client/types";
import { client } from "../../../consumers/client";

const FormClient = ({ currentMode, handleMode, getClients, valueEdit }: IndexProps) => {
  const [values, setValues] = useState<IClient>(valueEdit);

  const handleValues = (value: any) => setValues({ ...values, ...value  });

  const confirmTexts: Record<mode, string> = {
    create: 'Registrar cliente',
    edit: 'Editar cliente',
    view: ''
  };

  const onSubmitCreate = async () => {
    try {
      if (!values) throw new Error('Insira dados validos.');
      const response = await client.create(values);
      getClients('/clients');
    } catch (err: any) {
      console.log(err);
    };
  }

  const onSubmitEdit = async () => {
    try {
      if (!values) throw new Error('Dados invalidos.');
      const response = await client.edit(values?.cod_cliente, values);
      getClients('/clients');
    } catch (err: any) {
      console.log(err);
    };
  }

  const viewProps: ViewProps = {
    handleValues,
    onSubmit: currentMode === 'create' ? onSubmitCreate : onSubmitEdit,
    values,
    confirmText: confirmTexts[currentMode],
    onBack: () => handleMode('view'),
    currentMode
  };

  return createElement(View, viewProps);
};

export default FormClient;