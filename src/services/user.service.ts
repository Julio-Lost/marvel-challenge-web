import { IRequestCreateUser, IResponseCreateUser } from '../models/CreateUser';
import { IResult } from '../models/Result';
import { IRequestUpdateProfile } from '../models/UpdateProfile';
import { getUserLocalStorage } from '../useful/constants/functions';
import { axiosPostApi } from '../useful/constants/useAxios';

export const createUser = async (data: IRequestCreateUser) => {
  const response = await axiosPostApi<IResult<IResponseCreateUser>>('user/create-user', data);
  return response;
};

export const updateUser = async (data: IRequestUpdateProfile) => {
  const user = getUserLocalStorage();

  const userId = user?.id;

  const body: IRequestUpdateProfile = {
    ...data,
    id: userId,
  };

  const response = await axiosPostApi<IResult<IResponseCreateUser>>('user/update-user', body);
  return response;
};
