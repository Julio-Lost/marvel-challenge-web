import { Grid } from '@material-ui/core';
import React from 'react';
import { GenericCard, IGenericCard } from './GenericCard';
import * as S from './styles';

interface IListCard {
  data: IGenericCard[];
}

export const ListCard = ({ data }: IListCard) => {
  return (
    <Grid container spacing={4}>
      {data.map(card => (
        <S.CustomGrid key={Math.random()} item xs={12} sm={6} md={6} lg={4}>
          <GenericCard
            key={card.title}
            imgUrl={card.imgUrl}
            isFavorite={card.isFavorite}
            title={card.title}
            type={card.type}
            id={card.id}
            actionAddFavorite={card.actionAddFavorite}
            actionRemoveFavorite={card.actionRemoveFavorite}
            linkDetail={card.linkDetail}
            actionNavigate={card.actionNavigate}
          />
        </S.CustomGrid>
      ))}
    </Grid>
  );
};
