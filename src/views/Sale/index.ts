import { createElement, useEffect, useState } from "react";
import View from "./view";
import { IProduct, ISale, Sale, ViewProps } from "./types";
import { client } from "../../consumers/client";
import { sale } from "../../consumers/sale";

const Sale = () => {
  const [values, setvalues] = useState<ISale>();
  const [clientOptions, setClientOptions] = useState<Array<{ label: string, value: string }>>([])
  const [newProduct, setNewProduct] = useState<IProduct>()
  const [productList, setProductList] = useState<Array<IProduct>>([])
  const [total, setTotal] = useState<number>(0);

  const handleValues = (value: any) => setvalues({ ...values, ...value });

  const handleNewProduct = (value: any) => setNewProduct({ ...newProduct, ...value })

  useEffect(() => {
    const getClients = async () => {
      try {
        const response = await client.list('/clients')

        const formatData = response?.data.map((value: any) => ({ label: value?.des_nome, value: String(value?.cod_cliente) }))

        setClientOptions(formatData)
      } catch (err: any) {
        console.log(err)
      }
    }

    getClients()
  }, [])

  const addProduct = () => {
    const [now] = new Date().toJSON().split('.');
    const [date] = now.split('T');

    const data: IProduct = {
      name: newProduct?.name ?? '',
      quantity: Number(newProduct?.quantity),
      value: Number(newProduct?.value),
      createAt: date,
      total: Number(newProduct?.value ?? 0) * Number(newProduct?.quantity ?? 0)
    }

    if (newProduct) {
      setTotal(prev => prev + data?.total);
      setProductList([ ...productList, data  ])
    };
  }

  const onSubmit = async () => {
    const data: Sale = {
      cod_cliente: values?.clientId ?? 0,
      dta_venda: values?.createAt ?? '',
      val_total_venda: total ?? 0,
      products: productList?.map((value) => ({
        des_produto: value?.name,
        dta_cadastro: value?.createAt,
        qtd_itens: value?.quantity,
        val_unitario: value?.value,
        val_total: value?.total,
      })) ?? []
    };

    try {
      const response = await sale.create(data);
      console.log(response);
    } catch (err: any) {
      console.log(err);
    };
  }

  const viewProps: ViewProps = {
    handleValues,
    values,
    clientOptions,
    addProduct,
    productList,
    newProductValue: newProduct,
    handleNewProduct,
    onSubmit,
  };

  return createElement(View, viewProps);
};

export default Sale;