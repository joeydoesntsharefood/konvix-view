import { IClient } from "../components/forms/RegisterClient/types";
import app from "../configs/app";
import { ResponseBase } from "../interfaces/ResponseBase";

export const client = {
  list: async (path: string): Promise<ResponseBase> => {
    try {
      const response = await app.get(path);
      return response?.data;
    } catch (err: any) {
      return err?.data;
    };
  },
  create: async (data: IClient): Promise<ResponseBase> => {
    try {
      const response = await app.post('/clients', data);
      return response?.data;
    } catch (err: any) {
      return err?.data;
    };
  },
  edit: async (id: number, data: IClient): Promise<ResponseBase> => {
    try {
      const response = await app.post(`/clients/${id}`, data);

      return response?.data;
    } catch (err: any) {
      return err?.data;
    };
  },
  delete: async (id: number): Promise<ResponseBase> => {
    try {
      const response = await app.delete(`/clients/${id}`);

      return response?.data;
    } catch (err: any) {
      return err?.data;
    }
  }
};
