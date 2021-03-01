import { IResponseSession } from '../../models/Login';

export const saveUserLocalStorage = (data: IResponseSession) => {
  localStorage.setItem('user', JSON.stringify(data));
};

export const getUserLocalStorage = () => {
  const userString = localStorage.getItem('user');

  if (userString) {
    const user: IResponseSession = JSON.parse(userString);
    return user;
  }

  return null;
};

export const removeUserLocalStorage = () => {
  localStorage.removeItem('user');
};
