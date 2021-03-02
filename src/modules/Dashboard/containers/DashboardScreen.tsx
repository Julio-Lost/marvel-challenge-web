import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RequestAddCharacterFavorite } from '../../../models/AddFavoriteCharacter';
import { RequestAddComicFavorite } from '../../../models/AddFavoriteComic';
import { Card, InfoCard, typeCard } from '../../../models/Card';
import { getCharacters } from '../../../services/character.service';
import { getComics } from '../../../services/comic.service';
import {
  addCharacterFavorite,
  addComicFavorite,
  removeCharacterFavorite,
  removeComicFavorite,
} from '../../../services/user.service';
import { IGenericCard } from '../../../shared/components/GenericCard/GenericCard';
import { Dashboard } from '../components/Dashboard';

export const DashboardScreen = () => {
  const [resultaMarvelApi, setResultMavelApi] = useState<IGenericCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [firstSearchPerformed, setFirstSearchPerformed] = useState<boolean>(false);

  const history = useHistory();

  const { enqueueSnackbar } = useSnackbar();

  const navigateToFavorites = () => {
    history.push('/favorites');
  };

  const navigateToRoute = (id: string, type: typeCard) => {
    if (type === 'Character') {
      const urlCharacter = `/character/${id}/comics`;
      history.push(urlCharacter);
    } else {
      const urlComic = `/comic/${id}/characters`;
      history.push(urlComic);
    }
  };

  const actionSearch = async (value: string, type: string) => {
    try {
      setFirstSearchPerformed(true);
      setLoading(true);
      if (type === 'char') {
        await getCharacter(value);
      } else {
        await getComic(value);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Falha ao buscar personagens.', { variant: 'error' });
    }
  };

  const actionAddCharacterFavorite = async (data: InfoCard) => {
    try {
      const characterTrated = new RequestAddCharacterFavorite(data);

      const response = await addCharacterFavorite(characterTrated);
      if (response.success) {
        enqueueSnackbar('Personagem adicionado como favorito.', { variant: 'success' });
      } else {
        enqueueSnackbar('Falha ao favoritar personagem.', { variant: 'error' });
      }
      return response.success;
    } catch (error) {
      enqueueSnackbar('Falha ao favoritar personagem.', { variant: 'error' });
      return false;
    }
  };

  const actionAddComicFavorite = async (data: InfoCard) => {
    try {
      const comicTrated = new RequestAddComicFavorite(data);

      const response = await addComicFavorite(comicTrated);
      if (response.success) {
        enqueueSnackbar('Quadrinho adicionado como favorita.', { variant: 'success' });
      } else {
        enqueueSnackbar('Falha ao favoritar quadrinho.', { variant: 'error' });
      }
      return response.success;
    } catch (error) {
      enqueueSnackbar('Falha ao favoritar quadrinho.', { variant: 'error' });
      return false;
    }
  };

  const actionRemoveComicFavorite = async (id: string) => {
    try {
      const response = await removeComicFavorite(id);
      if (response.success) {
        enqueueSnackbar('Quadrinho removido dos favoritos.', { variant: 'success' });
      } else {
        enqueueSnackbar('Falha ao remover quadrinho dos favoritos.', { variant: 'error' });
      }
      const responseReturn = !response.success;
      return responseReturn;
    } catch (error) {
      enqueueSnackbar('Falha ao remover quadrinho dos favoritos.', { variant: 'error' });
      return true;
    }
  };

  const getCharacter = async (value: string) => {
    const response = await getCharacters(value);
    const errorResponse = !response.success;

    if (errorResponse) {
      enqueueSnackbar(response.message, { variant: 'error' });
    }

    const arrayCharacterTrated: IGenericCard[] = [];

    response.data.results.forEach(item => {
      let characterTrated: IGenericCard = {} as IGenericCard;

      const cardTrated = new Card('Character', item);
      characterTrated = cardTrated;
      characterTrated.actionAddFavorite = actionAddCharacterFavorite;
      characterTrated.actionRemoveFavorite = actionRemoveCharacterFavorite;
      characterTrated.actionNavigate = navigateToRoute;

      arrayCharacterTrated.push(characterTrated);
    });

    setResultMavelApi(arrayCharacterTrated);
  };

  const getComic = async (value: string) => {
    const response = await getComics(value);
    const errorResponse = !response.success;

    if (errorResponse) {
      enqueueSnackbar(response.message, { variant: 'error' });
    }

    const arrayComicTrated: IGenericCard[] = [];

    response.data.results.forEach(item => {
      let comicTrated: IGenericCard = {} as IGenericCard;

      const cardTrated = new Card('Comic', item);
      comicTrated = cardTrated;
      comicTrated.actionAddFavorite = actionAddComicFavorite;
      comicTrated.actionRemoveFavorite = actionRemoveComicFavorite;
      comicTrated.actionNavigate = navigateToRoute;

      arrayComicTrated.push(comicTrated);
    });

    setResultMavelApi(arrayComicTrated);
  };

  const actionRemoveCharacterFavorite = async (id: string) => {
    try {
      const response = await removeCharacterFavorite(id);
      if (response.success) {
        enqueueSnackbar('Personagem removido dos favoritos.', { variant: 'success' });
      } else {
        enqueueSnackbar('Falha ao remover personagem dos favoritos.', { variant: 'error' });
      }
      const responseReturn = !response.success;
      return responseReturn;
    } catch (error) {
      enqueueSnackbar('Falha ao remover personagem dos favoritos.', { variant: 'error' });
      return true;
    }
  };

  return (
    <Dashboard
      navigateToFavorites={navigateToFavorites}
      data={resultaMarvelApi}
      actionSearch={actionSearch}
      firstSearchPerformed={firstSearchPerformed}
      loading={loading}
    />
  );
};

export default DashboardScreen;
