import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { FiPower, FiSettings } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import marvelLogo from '../../../assets/logo-header.svg';
import * as S from './styles';
import { Modal } from '../Modal';

export interface ILayout {
  headerActive: boolean;
}

const Layout: React.FC<ILayout> = ({ children, headerActive }) => {
  const [modal, setModal] = useState<boolean>(false);

  const history = useHistory();

  const handleModal = (value: boolean) => {
    setModal(value);
  };

  const actionOpenModal = () => {
    setModal(true);
  };

  const actionLogou = () => {
    console.log('logout');
  };

  return (
    <S.MainContainer>
      {headerActive && (
        <S.Header>
          <div>
            <img src={marvelLogo} alt="logo-marvel" loading="lazy" style={{ width: 36, height: 36 }} />
            <S.ProfileContainer>
              <strong>Bem-vindo,</strong>
              <S.NameUser>teste</S.NameUser>
            </S.ProfileContainer>
          </div>
          <div>
            <IconButton onClick={actionOpenModal}>
              <FiSettings size={24} fontSize="bold" />
            </IconButton>
            <IconButton onClick={actionOpenModal}>
              <FiPower size={24} fontSize="bold" />
            </IconButton>
          </div>
        </S.Header>
      )}
      {children}
      {modal && <Modal openModal={modal} handleModal={handleModal} actionButtonConfirm={actionLogou} />}
    </S.MainContainer>
  );
};

export default Layout;
