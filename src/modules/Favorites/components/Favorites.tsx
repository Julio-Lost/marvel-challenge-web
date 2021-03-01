import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import IconButton from '@material-ui/core/IconButton/IconButton';
import { GenericCard } from '../../../shared/components/GenericCard/GenericCard';
import Layout from '../../../shared/components/Layout';
import * as S from './styles';
import { Colors } from '../../../useful/constants/colors';

interface FavoritesProps {
  navigateToDashboard: () => void;
}

export const Favorites = ({ navigateToDashboard }: FavoritesProps) => {
  return (
    <S.MainContainer>
      <Layout headerActive>
        <S.Header>
          <IconButton onClick={navigateToDashboard}>
            <IoMdArrowBack color={Colors.red} />
          </IconButton>
          <S.DivTitle>
            <h4>Favoritos</h4>
          </S.DivTitle>
        </S.Header>
        <S.CustomDiv>
          <S.DivHeader>
            <h3>Seus personagens favoritos</h3>
          </S.DivHeader>
        </S.CustomDiv>
        <S.CustomDivCardContainer>
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
        </S.CustomDivCardContainer>
        <S.CustomDiv>
          <S.DivHeader>
            <h3>Seus quadrinhos favoritos</h3>
          </S.DivHeader>
        </S.CustomDiv>
        <S.CustomDivCardContainer>
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
        </S.CustomDivCardContainer>
      </Layout>
    </S.MainContainer>
  );
};
