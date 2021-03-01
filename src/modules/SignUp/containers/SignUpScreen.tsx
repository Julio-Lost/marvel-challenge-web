import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IRequestCreateUser } from '../../../models/CreateUser';
import { createUser } from '../../../services/user.service';
import { SignUp } from '../components/SignUp';

export const SignUpScreen = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const actionCreateUser = async (data: IRequestCreateUser) => {
    try {
      setLoading(true);
      const response = await createUser(data);
      setLoading(false);
      if (response.success) {
        enqueueSnackbar('Você já pode fazer seu login!', { variant: 'success' });

        history.push('/');
      }
      return response.success;
    } catch (error) {
      setLoading(false);
      if (error.response.status && error.response.status === 403) {
        enqueueSnackbar('Email já está sendo utilizado.', { variant: 'error' });
      } else {
        enqueueSnackbar('Ocorreu um erro ao fazer cadastro, tente novamente.', { variant: 'error' });
      }
      return false;
    }
  };
  return <SignUp actionCreateUser={actionCreateUser} loading={loading} />;
};

export default SignUpScreen;
