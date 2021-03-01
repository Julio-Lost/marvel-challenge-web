import React from 'react';
import { GenericCard } from '../../../shared/components/GenericCard/GenericCard';
import Layout from '../../../shared/components/Layout';
import * as S from './styles';

export const Favorites = () => {
  return (
    <S.MainContainer>
      <Layout headerActive>
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
