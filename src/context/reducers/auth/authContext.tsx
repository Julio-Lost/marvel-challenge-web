import React, { createContext, useReducer } from 'react';
import { getUserLocalStorage } from '../../../useful/constants/functions';
import { AuthActions } from '../../types/auth.types';
import { AuthenticationDispatch, authReducer } from './authReducer';
import { AuthState, AUTH_INITIAL_STATE } from './constants';

const AuthenticationStateContext = createContext<AuthState | undefined>(undefined);
const AuthenticationDispatchContext = createContext<AuthenticationDispatch | undefined>(undefined);

type AuthenticationProps = { children: React.ReactNode };

function AuthenticationProvider({ children }: AuthenticationProps) {
  const response = getUserLocalStorage();
  let initial = AUTH_INITIAL_STATE;
  if (response) {
    initial = { user: response };
  }

  const [state, dispatch] = useReducer(authReducer, initial);

  return (
    <AuthenticationStateContext.Provider value={state}>
      <AuthenticationDispatchContext.Provider value={dispatch}>{children}</AuthenticationDispatchContext.Provider>
    </AuthenticationStateContext.Provider>
  );
}

function useAuthenticationContext() {
  const state = React.useContext(AuthenticationStateContext);

  if (state === undefined) {
    throw new Error('useAutenticacaoState deve ser utilizando dentro de um AutenticacaoProvider');
  }

  const dispatch = React.useContext(AuthenticationDispatchContext);

  if (dispatch === undefined) {
    throw new Error('useAutenticacaoDispatch deve ser utilizando dentro de um AutenticacaoProvider');
  }

  const actions = AuthActions;

  return { state, dispatch, actions };
}

export { AuthenticationProvider, useAuthenticationContext };
