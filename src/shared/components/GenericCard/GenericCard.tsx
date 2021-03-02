/* eslint-disable @typescript-eslint/no-empty-function */
import { IconButton } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';
import { useState } from 'react';
import { FiBook, FiExternalLink, FiUser } from 'react-icons/fi';
import { InfoCard, typeCard } from '../../../models/Card';
import { Colors } from '../../../useful/constants/colors';
import * as S from './styles';

export interface IGenericCard {
  id: string;
  type: typeCard;
  description?: string | null;
  imgUrl: string;
  isFavorite: boolean;
  title: string;
  linkDetail: string;
  actionAddFavorite?: (data: InfoCard) => Promise<boolean>;
  actionRemoveFavorite?: (id: string) => Promise<boolean>;
  actionNavigate?: (id: string, type: typeCard) => void;
}

export const GenericCard = ({
  id,
  type,
  imgUrl,
  isFavorite,
  title,
  linkDetail,
  actionAddFavorite,
  actionRemoveFavorite,
  actionNavigate,
}: IGenericCard) => {
  const [loadingStar, setLoadingStar] = useState<boolean>(false);
  const [cardFavorite, setCardFavorite] = useState<boolean>(isFavorite);

  const handleAddFavoriteAction = async () => {
    if (actionAddFavorite) {
      setLoadingStar(true);
      const info: InfoCard = {
        id,
        imgUrl,
        title,
        linkDetail,
      };
      const response = await actionAddFavorite(info);

      setCardFavorite(response);
      setLoadingStar(false);
    }
  };

  const handleRemoveFavoriteAction = async () => {
    if (actionRemoveFavorite) {
      setLoadingStar(true);
      const response = await actionRemoveFavorite(id);

      setCardFavorite(response);
      setLoadingStar(false);
    }
  };

  const actionDetail = () => {
    window.location.href = linkDetail;
  };

  return (
    <S.CardMainContainer>
      <S.HeaderContainer>{title}</S.HeaderContainer>
      <CardMedia>
        <S.CardContainer imgurl={imgUrl} />
      </CardMedia>
      <S.CardActionsContainer>
        {actionNavigate && (
          <>
            {type === 'Character' && (
              <Tooltip title="Quadrinhos">
                <IconButton aria-label="quadrinhos" onClick={() => actionNavigate!(id, type)}>
                  <FiBook color="white" />
                </IconButton>
              </Tooltip>
            )}
            {type === 'Comic' && (
              <Tooltip title="Personagens">
                <IconButton aria-label="personagem" onClick={() => actionNavigate!(id, type)}>
                  <FiUser color="white" />
                </IconButton>
              </Tooltip>
            )}
          </>
        )}
        {cardFavorite ? (
          <IconButton onClick={handleRemoveFavoriteAction}>
            <S.Star $loading={loadingStar} color={Colors.yellow} />
          </IconButton>
        ) : (
          <IconButton onClick={handleAddFavoriteAction}>
            <S.StarBorder $loading={loadingStar} color={Colors.white} />
          </IconButton>
        )}
        <Tooltip title="Detalhes">
          <IconButton aria-label="detalhes" onClick={actionDetail}>
            <FiExternalLink color="white" />
          </IconButton>
        </Tooltip>
      </S.CardActionsContainer>
    </S.CardMainContainer>
  );
};
