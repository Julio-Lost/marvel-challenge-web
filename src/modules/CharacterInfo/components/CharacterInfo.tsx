import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { GenericCard } from '../../../shared/components/GenericCard/GenericCard';
import Layout from '../../../shared/components/Layout';
import { Colors } from '../../../useful/constants/colors';
import * as S from './styles';

export const CharacterInfo = () => {
  return (
    <S.MainContainer>
      <Layout headerActive>
        <S.Header>
          <IconButton>
            <IoMdArrowBack color={Colors.red} />
          </IconButton>
          <S.DivTitle>
            <h4>Quadrinho(s) relacionado ao personagem</h4>
          </S.DivTitle>
        </S.Header>
        <S.CustomDiv>
          <S.CustomDivContainer>
            <Grid justify="center" container spacing={4}>
              <S.CustomGrid key={Math.random()} item xs={12} sm={6} md={6} lg={4}>
                <GenericCard />
              </S.CustomGrid>
            </Grid>
          </S.CustomDivContainer>
        </S.CustomDiv>
      </Layout>
    </S.MainContainer>
  );
};
