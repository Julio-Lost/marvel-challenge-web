import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { FiPower, FiSettings } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import marvelLogo from '../../../assets/logo-header.svg';
import * as S from './styles';
import { Modal } from '../Modal';
import { useAuthenticationContext } from '../../../context/reducers/auth/authContext';
import { AuthAsyncActions } from '../../../context/actions/authAsyncAction';

export interface ILayout {
  headerActive: boolean;
}

const Layout: React.FC<ILayout> = ({ children, headerActive }) => {
  const [modal, setModal] = useState<boolean>(false);

  const history = useHistory();
  const { state } = useAuthenticationContext();
  const { logoutRequestAction } = AuthAsyncActions();

  const name = state.user.userName;

  const handleModal = (value: boolean) => {
    setModal(value);
  };

  const actionOpenModal = () => {
    setModal(true);
  };

  const logoutAction = () => {
    logoutRequestAction();
  };

  const navigateToProfile = () => {
    history.push('/profile');
  };

  return (
    <S.MainContainer>
      {headerActive && (
        <S.Header>
          <div>
            <S.MarvelLogo src={marvelLogo} alt="logo-marvel" loading="lazy" />
            <S.ProfileContainer>
              <strong>Bem-vindo,</strong>
              <S.NameUser>{name}</S.NameUser>
            </S.ProfileContainer>
          </div>
          <div>
            <IconButton onClick={navigateToProfile}>
              <FiSettings size={24} fontSize="bold" />
            </IconButton>
            <IconButton onClick={actionOpenModal}>
              <FiPower size={24} fontSize="bold" />
            </IconButton>
          </div>
        </S.Header>
      )}
      {children}
      {modal && <Modal openModal={modal} handleModal={handleModal} actionButtonConfirm={logoutAction} />}
    </S.MainContainer>
  );
};

export default Layout;
