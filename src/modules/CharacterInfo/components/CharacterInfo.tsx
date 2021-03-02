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

interface CharacterInfoProps {
  navigateToDashboard: () => void;
  characters: IGenericCard[];
  loading: boolean;
}

export const CharacterInfo = ({ navigateToDashboard, characters, loading }: CharacterInfoProps) => {
  return (
    <S.MainContainer>
      <S.Header>
        <IconButton onClick={navigateToDashboard}>
          <IoMdArrowBack color={Colors.red} />
        </IconButton>
        <S.DivTitle>
          <h4>Personagens relacionados ao quadrinho</h4>
        </S.DivTitle>
      </S.Header>
      <S.CustomDiv>
        <S.CustomDivContainer>
          {loading ? <Loading /> : characters.length === 0 ? <NoResults /> : <ListCard data={characters} />}
        </S.CustomDivContainer>
      </S.CustomDiv>
    </S.MainContainer>
  );
};
