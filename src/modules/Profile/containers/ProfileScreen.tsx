import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthAsyncActions } from '../../../context/actions/authAsyncAction';
import { IRequestUpdateProfile } from '../../../models/UpdateProfile';
import { Profile } from '../components/Profile';

export const ProfileScreen = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { updateRequestAction } = AuthAsyncActions();

  const navigateToDashboard = () => {
    history.push('/dashboard');
  };

  const actionUpdateProfile = async (data: IRequestUpdateProfile) => {
    try {
      setLoading(true);
      const response = await updateRequestAction(data);
      setLoading(false);
      if (response.success) {
        history.push('/dashboard');
        enqueueSnackbar('Cadastro atualizado com sucesso', { variant: 'success' });
      }
      return response.success;
    } catch (error) {
      setLoading(false);
      switch (error.response.status) {
        case error.response.status && error.response.status === 403:
          enqueueSnackbar('Email já está sendo utilizado.', { variant: 'error' });
          break;
        case error.response.status && error.response.status === 405:
          enqueueSnackbar('Senha atual incorreta.', { variant: 'error' });
          break;
        default:
          enqueueSnackbar('Falha ao atualizar cadastro.', { variant: 'error' });
      }
      return false;
    }
  };

  return (
    <Profile actionUpdateProfile={actionUpdateProfile} navigateToDashboard={navigateToDashboard} loading={loading} />
  );
};

export default ProfileScreen;
