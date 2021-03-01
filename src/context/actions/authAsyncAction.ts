import { IRequestSession, IResponseSession } from '../../models/Login';
import { IRequestUpdateProfile } from '../../models/UpdateProfile';
import { createSession } from '../../services/login.service';
import { updateUser } from '../../services/user.service';
import { removeUserLocalStorage, saveUserLocalStorage } from '../../useful/constants/functions';
import { useAuthenticationContext } from '../reducers/auth/authContext';

export function AuthAsyncActions() {
  const { dispatch, actions, state } = useAuthenticationContext();

  const loginRequestAction = async (data: IRequestSession) => {
    try {
      const response = await createSession(data);
      saveUserLocalStorage(response.data);
      dispatch({ type: actions.LOGIN_SUCCESS, payload: response.data });
      return response;
    } catch (error) {
      dispatch({ type: actions.LOGIN_FAILURE });
      throw error;
    }
  };

  const logoutRequestAction = async () => {
    removeUserLocalStorage();
    dispatch({ type: actions.LOGOUT });
  };

  const updateRequestAction = async (data: IRequestUpdateProfile) => {
    try {
      const { token, id } = state.user;
      const response = await updateUser(data);

      const newUser: IResponseSession = {
        email: data.email,
        id,
        token,
        userName: data.name,
      };
      removeUserLocalStorage();
      saveUserLocalStorage(newUser);

      dispatch({ type: actions.UPDATE_SUCCESS, payload: newUser });

      return response;
    } catch (error) {
      dispatch({ type: actions.UPDATE_FAILURE });
      throw error;
    }
  };

  return { loginRequestAction, logoutRequestAction, updateRequestAction };
}
