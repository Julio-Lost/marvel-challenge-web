import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { AuthAsyncActions } from '../../../context/actions/authAsyncAction';
import { IRequestSession } from '../../../models/Login';
import { Login } from '../components/Login';

export const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { loginRequestAction } = AuthAsyncActions();

  const createSessionAction = async (data: IRequestSession) => {
    try {
      setLoading(true);
      const response = await loginRequestAction(data);
      setLoading(false);
      if (response.success) {
        history.push('/dashboard');
      }
      return response.success;
    } catch (error) {
      setLoading(false);
      return false;
    }
  };
  return <Login createSessionAction={createSessionAction} loading={loading} />;
};

export default LoginScreen;
