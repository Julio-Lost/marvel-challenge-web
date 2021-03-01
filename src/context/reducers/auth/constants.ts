import { IResponseSession } from '../../../models/Login';

export interface AuthState {
  user: IResponseSession;
}
export const AUTH_INITIAL_STATE: AuthState = {
  user: {} as IResponseSession,
};
