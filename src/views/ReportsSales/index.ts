import { createElement, useEffect, useState } from "react";
import View from "./view";
import { Sale } from "../Sale/types";
import { DataSourceSales, ViewProps } from "./types";
import { sale } from "../../consumers/sale";

const ReportsSales = () => {
  const [dataSource, setDataSource] = useState<DataSourceSales>([]);
  const [filters, setFilters] = useState<{ startAt: string, endAt: string }>()

  const handleFilters = (value: any) => setFilters({ ...filters, ...value });

  const viewProps: ViewProps = {
    filters,
    handleFilters,
    dataSource
  };

  const getValues = async (path: string) => {
    try {
      const response = await sale.list(path);

      setDataSource(response?.data)
    } catch (err: any) {
      console.log(err?.data)
    }
  };

  useEffect(() => {
    if (!filters) getValues('/sale');
    else {
      let query
      if (filters?.startAt && filters?.endAt) query = `?startAt=${filters.startAt}&endAt=${filters.endAt}`;
      else if (filters?.endAt) query = `?endAt=${filters.endAt}`;
      else if (filters?.startAt) query = `?startAt=${filters.startAt}`;
      
      if (query) getValues(`/sale${query}`);
      else getValues('/sale');      
    }
  }, [filters]);

  return createElement(View, viewProps);
};

export default ReportsSales;