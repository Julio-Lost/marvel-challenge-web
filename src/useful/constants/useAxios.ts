/* eslint-disable no-return-await */
import mainAxios from 'axios';
import { getUserLocalStorage } from './functions';
import { baseApiUrl } from './values';

const axios = mainAxios.create({
  baseURL: baseApiUrl,
});

export async function axiosPostApi<T>(route: string, body: unknown = null) {
  // eslint-disable-next-line no-extra-boolean-cast
  const jsonBody = !!body ? JSON.stringify(body) : null;
  const user = getUserLocalStorage();

  const token = user?.token;

  return await axios
    .post<T>(route, jsonBody, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}

export async function axiosPutApi<T>(route: string, body: unknown) {
  const jsonBody = JSON.stringify(body);
  const user = getUserLocalStorage();

  const token = user?.token;

  return await axios
    .put<T>(route, jsonBody, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}

export async function axiosGetApi<T>(route: string) {
  const user = getUserLocalStorage();

  const token = user?.token;
  return await axios
    .get<T>(route, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}

export async function axiosDeleteApi<T>(route: string) {
  const user = getUserLocalStorage();

  const token = user?.token;
  return await axios
    .delete<T>(route, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}
