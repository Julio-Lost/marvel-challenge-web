/* eslint-disable no-nested-ternary */
import { IconButton } from '@material-ui/core';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { IGenericCard } from '../../../shared/components/GenericCard/GenericCard';
import { ListCard } from '../../../shared/components/GenericCard/ListCard';
import { Loading } from '../../../shared/components/Loading';
import { NoResults } from '../../../shared/components/NoResults';
import { Colors } from '../../../useful/constants/colors';
import * as S from './styles';

interface ComicInfoProps {
  navigateToDashboard: () => void;
  comics: IGenericCard[];
  loading: boolean;
}

export const ComicInfo = ({ navigateToDashboard, comics, loading }: ComicInfoProps) => {
  return (
    <S.MainContainer>
      <S.Header>
        <IconButton onClick={navigateToDashboard}>
          <IoMdArrowBack color={Colors.red} />
        </IconButton>
        <S.DivTitle>
          <h4>Quadrinho(s) relacionados ao personagem</h4>
        </S.DivTitle>
      </S.Header>
      <S.CustomDiv>
        <S.CustomDivContainer>
          {loading ? <Loading /> : comics.length === 0 ? <NoResults /> : <ListCard data={comics} />}
        </S.CustomDivContainer>
      </S.CustomDiv>
    </S.MainContainer>
  );
};
