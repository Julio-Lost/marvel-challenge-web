import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RequestAddCharacterFavorite } from '../../../models/AddFavoriteCharacter';
import { RequestAddComicFavorite } from '../../../models/AddFavoriteComic';
import { InfoCard } from '../../../models/Card';
import { CardCharacterFavorite } from '../../../models/FavoriteCharacter';
import { CardComicFavorite } from '../../../models/FavoriteComic';
import {
  addCharacterFavorite,
  addComicFavorite,
  getCharactersFavorites,
  getComicsFavorites,
  removeCharacterFavorite,
  removeComicFavorite,
} from '../../../services/user.service';
import { IGenericCard } from '../../../shared/components/GenericCard/GenericCard';
import { Favorites } from '../components/Favorites';

export const FavoritesScreen = () => {
  const [comicsFavorites, setComicsFavorites] = useState<IGenericCard[]>([]);
  const [charactersFavorites, setCharactersFavorites] = useState<IGenericCard[]>([]);
  const [loadingComics, setLoadingComics] = useState(false);
  const [loadingCharacters, setLoadingCharacters] = useState(false);

  useEffect(() => {
    actionGetComicsFavorites();
    actionGetCharactersFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const navigateToDashboard = () => {
    history.push('/dashboard');
  };

  const actionGetComicsFavorites = async () => {
    try {
      setLoadingComics(true);
      const response = await getComicsFavorites();
      const errorResponse = !response.success;
      if (errorResponse) {
        enqueueSnackbar(response.message, { variant: 'error' });
      }

      const arrayComicTrated: IGenericCard[] = [];

      response.data.forEach(item => {
        let comicTrated: IGenericCard = {} as IGenericCard;

        const cardTrated = new CardComicFavorite('Comic', item);
        comicTrated = cardTrated;
        comicTrated.actionAddFavorite = actionAddComicFavorite;
        comicTrated.actionRemoveFavorite = actionRemoveComicFavorite;

        arrayComicTrated.push(comicTrated);
      });

      setComicsFavorites(arrayComicTrated);
      setLoadingComics(false);
    } catch (error) {
      setLoadingComics(false);
      enqueueSnackbar('Falha ao buscar revistas.', { variant: 'error' });
    }
  };

  const actionAddComicFavorite = async (data: InfoCard) => {
    try {
      const comicTrated = new RequestAddComicFavorite(data);

      const response = await addComicFavorite(comicTrated);
      if (response.success) {
        enqueueSnackbar('Revista adicionada como favorita.', { variant: 'success' });
      } else {
        enqueueSnackbar('Falha ao favoritar revista.', { variant: 'error' });
      }
      return response.success;
    } catch (error) {
      enqueueSnackbar('Falha ao favoritar revista.', { variant: 'error' });
      return false;
    }
  };

  const actionRemoveComicFavorite = async (id: string) => {
    try {
      const response = await removeComicFavorite(id);
      if (response.success) {
        await actionGetComicsFavorites();
        enqueueSnackbar('Revista removida dos favoritos.', { variant: 'success' });
      } else {
        enqueueSnackbar('Falha ao remover revista dos favoritos.', { variant: 'error' });
      }
      const responseReturn = !response.success;
      return responseReturn;
    } catch (error) {
      enqueueSnackbar('Falha ao remover revista dos favoritos.', { variant: 'error' });
      return true;
    }
  };

  const actionGetCharactersFavorites = async () => {
    try {
      setLoadingCharacters(true);
      const response = await getCharactersFavorites();
      const errorResponse = !response.success;

      if (errorResponse) {
        enqueueSnackbar(response.message, { variant: 'error' });
      }

      const arrayCharacterTrated: IGenericCard[] = [];

      response.data.forEach(item => {
        let characterTrated: IGenericCard = {} as IGenericCard;

        const cardTrated = new CardCharacterFavorite('Character', item);
        characterTrated = cardTrated;
        characterTrated.actionAddFavorite = actionAddCharacterFavorite;
        characterTrated.actionRemoveFavorite = actionRemoveCharacterFavorite;

        arrayCharacterTrated.push(characterTrated);
      });

      setCharactersFavorites(arrayCharacterTrated);
      setLoadingCharacters(false);
    } catch (error) {
      setLoadingCharacters(false);
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

  const actionRemoveCharacterFavorite = async (id: string) => {
    try {
      const response = await removeCharacterFavorite(id);
      if (response.success) {
        await actionGetCharactersFavorites();
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
    <Favorites
      navigateToDashboard={navigateToDashboard}
      comicsFavorites={comicsFavorites}
      charactersFavorites={charactersFavorites}
      loadingComics={loadingComics}
      loadingCharacters={loadingCharacters}
    />
  );
};

export default FavoritesScreen;
