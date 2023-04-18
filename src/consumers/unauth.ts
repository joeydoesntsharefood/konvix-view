import { IAccess } from "../components/forms/Login/types";
import { IUser } from "../components/forms/Register/types";
import app from "../configs/app";
import { ResponseBase } from "../interfaces/ResponseBase";

const unAuthConsumer = {
  signin: async (data: IAccess): Promise<ResponseBase> => {
    try {
      const response = await app.post('/signin', data)
      return response?.data
    } catch (err: any) {
      return err?.data
    }
  },
  signup: async (data: IUser) => {
    try {
      const response = await app.post('/signup', data)
      return response?.data
    } catch (err: any) {
      console.log(err)
    }
  },
};

export default unAuthConsumer;