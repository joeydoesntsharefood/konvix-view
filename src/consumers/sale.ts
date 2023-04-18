import app from "../configs/app";

export const sale = {
  create: async (data: any) => {
    try {
      const response = await app.post('/sale', data);

      return response?.data;
    } catch (err: any) {
      return err?.data;
    };
  },
  list: async (path: string) => {
    try {
      const response = await app.get(path);

      return response?.data;
    } catch (err: any) {
      return err?.data;
    };
  }
};
