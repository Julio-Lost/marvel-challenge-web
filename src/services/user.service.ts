import { IRequestAddCharacterFavorite, IResponseAddCharacterFavorite } from '../models/AddFavoriteCharacter';
import { IRequestAddComicFavorite, IResponseAddComicFavorite } from '../models/AddFavoriteComic';
import { IRequestCreateUser, IResponseCreateUser } from '../models/CreateUser';
import { IResponseCharacterFavorite } from '../models/FavoriteCharacter';
import { IResponseComicFavorite } from '../models/FavoriteComic';
import { IResult } from '../models/Result';
import { IRequestUpdateProfile } from '../models/UpdateProfile';
import { getUserLocalStorage } from '../useful/constants/functions';
import { axiosGetApi, axiosPostApi } from '../useful/constants/useAxios';

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

export const getComicsFavorites = async () => {
  const user = getUserLocalStorage();

  const userId = user?.id;
  const url = `user/${userId}/favorites-comics`;

  const response = await axiosGetApi<IResult<IResponseComicFavorite[]>>(url);
  return response;
};

export const getCharactersFavorites = async () => {
  const user = getUserLocalStorage();

  const userId = user?.id;
  const url = `user/${userId}/favorites-characters`;

  const response = await axiosGetApi<IResult<IResponseCharacterFavorite[]>>(url);
  return response;
};

export const addComicFavorite = async (data: IRequestAddComicFavorite) => {
  const body: IRequestAddComicFavorite = data;

  const user = getUserLocalStorage();

  body.userId = user?.id;

  const response = await axiosPostApi<IResult<IResponseAddComicFavorite>>('user/add-favorite-comic/', body);
  return response;
};

export const removeComicFavorite = async (comicId: string) => {
  const user = getUserLocalStorage();

  const body = {
    comicId,
    userId: user?.id,
  };

  const response = await axiosPostApi<IResult<{}>>('user/remove-favorite-comic/', body);
  return response;
};

export const addCharacterFavorite = async (data: IRequestAddCharacterFavorite) => {
  const body: IRequestAddCharacterFavorite = data;

  const user = getUserLocalStorage();

  body.userId = user?.id;

  const response = await axiosPostApi<IResult<IResponseAddCharacterFavorite>>('user/add-favorite-character/', body);
  return response;
};

export const removeCharacterFavorite = async (characterId: string) => {
  const user = getUserLocalStorage();

  const body = {
    characterId,
    userId: user?.id,
  };

  const response = await axiosPostApi<IResult<{}>>('user/remove-favorite-character/', body);
  return response;
};
