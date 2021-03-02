import { ResponseApiMarvel } from '../models/ResponseApiMarvel';
import { IResult } from '../models/Result';
import { getUserLocalStorage } from '../useful/constants/functions';
import { axiosPostApi } from '../useful/constants/useAxios';

export const getComics = async (value: string) => {
  const user = getUserLocalStorage();

  const body = {
    userId: user?.id,
    searchParameter: value,
  };

  const response = await axiosPostApi<IResult<ResponseApiMarvel>>('comic', body);
  return response;
};

export const getCharactersOfComic = async (comicId: String) => {
  const user = getUserLocalStorage();

  const body = {
    userId: user?.id,
  };

  const url = `comic/${comicId}/characters`;

  const response = await axiosPostApi<IResult<ResponseApiMarvel>>(url, body);
  return response;
};
