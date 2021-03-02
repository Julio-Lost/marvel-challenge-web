/* eslint-disable no-nested-ternary */
import IconButton from '@material-ui/core/IconButton/IconButton';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { IGenericCard } from '../../../shared/components/GenericCard/GenericCard';
import { ListCard } from '../../../shared/components/GenericCard/ListCard';
import { Loading } from '../../../shared/components/Loading';
import { NoResults } from '../../../shared/components/NoResults';
import { Colors } from '../../../useful/constants/colors';
import * as S from './styles';

interface FavoritesProps {
  navigateToDashboard: () => void;
  comicsFavorites: IGenericCard[];
  charactersFavorites: IGenericCard[];
  loadingComics: boolean;
  loadingCharacters: boolean;
}

export const Favorites = ({
  navigateToDashboard,
  comicsFavorites,
  charactersFavorites,
  loadingComics,
  loadingCharacters,
}: FavoritesProps) => {
  return (
    <S.MainContainer>
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
        {loadingCharacters ? (
          <Loading />
        ) : charactersFavorites.length === 0 ? (
          <NoResults />
        ) : (
          <ListCard data={charactersFavorites} />
        )}
      </S.CustomDivCardContainer>
      <S.CustomDiv>
        <S.DivHeader>
          <h3>Seus quadrinhos favoritos</h3>
        </S.DivHeader>
      </S.CustomDiv>
      <S.CustomDivCardContainer>
        {loadingComics ? (
          <Loading />
        ) : comicsFavorites.length === 0 ? (
          <NoResults />
        ) : (
          <ListCard data={comicsFavorites} />
        )}
      </S.CustomDivCardContainer>
    </S.MainContainer>
  );
};
