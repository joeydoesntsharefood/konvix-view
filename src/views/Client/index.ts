import { createElement, useEffect, useState } from "react";
import View from "./view";
import { IUser, ViewProps, mode } from "./types";
import FormClient from "../../components/forms/RegisterClient";
import { client } from "../../consumers/client";
import { IClient } from "../../components/forms/RegisterClient/types";

const Client = () => {
  const [mode, setMode] = useState<mode>('view');
  const [clients, setClients] = useState<Array<IClient>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>();
  const [valueEdit, setValueEdit] = useState<IClient>();
  const [filters, setFilters] = useState<{des_nome: string, val_venda_acumulad: string, dta_ult_pedido: string }>()

  const handleFilters = (value: any) => setFilters(value);

  const handleMode = (value: mode) => {
    if (value === 'create') setValueEdit({} as any)
    setMode(value)
  };

  const handleSearch = (value: any) => setSearch(value.search);

  const handleClients = (value: Array<IClient>) => setClients(value);

  const handleValueEdit = (value: any) => setValueEdit(value);

  const getClients = async (path: string) => {
    setLoading(true);
    try {
      const response = await client.list(path);

      if (!response.success) throw new Error('Não foi possível encontrar clientes.');

      handleClients(response?.data);
    } catch (err: any) {
      console.log(err);
    };
    setLoading(false);
  };

  const onDelete = async (id: number) => {
    try {
      const response = await client.delete(id)

      getClients('/clients');
    } catch (err: any) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!filters) getClients('/clients');
    else {
      const [filter] = Object.entries(filters)

      if (!filters) getClients('/clients');
      else getClients(`/clients?${filter.join('=')}`);
    }
  }, [filters]);

  const viewProps: ViewProps = {
    getClients,
    clients,
    handleMode,
    currentMode: mode,
    onSearch: handleSearch,
    search,
    valueEdit,
    handleValueEdit,
    onDelete,
    handleFilters,
    filters,
  };

  const modes: Record<mode, any> = {
    create: FormClient,
    edit: FormClient,
    view: View
  };

  return createElement(modes[mode], viewProps);
};

export default Client;