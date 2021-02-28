/* eslint-disable @typescript-eslint/no-empty-function */
import { CardActions, IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { FiBook, FiExternalLink, FiUser } from 'react-icons/fi';
import Tooltip from '@material-ui/core/Tooltip';
import { useState } from 'react';

import * as S from './styles';
import { Colors } from '../../../useful/constants/colors';

export const GenericCard = () => {
  const isFavorite = false;
  const [loadingStar, setLoadingStar] = useState<boolean>(false);
  const [cardFavorite, setCardFavorite] = useState<boolean>(isFavorite);

  const url = 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/433ybv_com_crd_01.jpg';
  let type = 'Comic';
  const handleActionAddFavorite = async () => {
    // if (actionAddFavorite) {
    // setLoadingStar(true);
    // const info: InfoCard = {
    //   id,
    //   imgUrl,
    //   title,
    //   linkDetail,
    // };
    // const response = await actionAddFavorite(info);

    setCardFavorite(true);
    setLoadingStar(false);
    // }
  };

  const handleActionRemoveFavorite = async () => {
    // if (actionRemoveFavorite) {
    //   setLoadingStar(true);
    //   const response = await actionRemoveFavorite(id);

    setCardFavorite(false);
    setLoadingStar(false);
    // }
  };

  const actionDetail = () => {
    type = 'Character';
    window.location.href = url;
  };

  return (
    <Card style={{ backgroundColor: 'black', color: 'white', borderRadius: 20, margin: 4 }}>
      <CardHeader title="BLACK WIDOW" />
      <CardMedia>
        <S.CardContainer imgurl={url} />
      </CardMedia>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        {type === 'Comic' ? (
          <Tooltip title="Quadrinhos">
            <IconButton aria-label="quadrinhos">
              <FiBook color="white" />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Personagens">
            <IconButton aria-label="personagem">
              <FiUser color="white" />
            </IconButton>
          </Tooltip>
        )}

        {cardFavorite ? (
          <IconButton onClick={handleActionRemoveFavorite}>
            <S.Star loading={loadingStar} color={Colors.yellow} />
          </IconButton>
        ) : (
          <IconButton onClick={handleActionAddFavorite}>
            <S.StarBorder loading={loadingStar} color={Colors.white} />
          </IconButton>
        )}
        <Tooltip title="Detalhes">
          <IconButton aria-label="detalhes" onClick={actionDetail}>
            <FiExternalLink color="white" />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};
