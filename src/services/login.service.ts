import { IResult } from '../models/Result';
import { IRequestSession, IResponseSession } from '../models/Login';
import { axiosPostApi } from '../useful/constants/useAxios';

export const createSession = async (data: IRequestSession) => {
  const response = await axiosPostApi<IResult<IResponseSession>>('user/session', data);
  return response;
};
