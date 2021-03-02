/* eslint-disable react/destructuring-assignment */
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { RequestAddComicFavorite } from '../../../models/AddFavoriteComic';
import { Card, InfoCard } from '../../../models/Card';
import { getComicsOfCharacters } from '../../../services/character.service';
import { addComicFavorite, removeComicFavorite } from '../../../services/user.service';
import { IGenericCard } from '../../../shared/components/GenericCard/GenericCard';
import { ComicInfo } from '../components/ComicInfo';

export const ComicInfoScreen: React.FC<RouteComponentProps> = props => {
  const [comics, setComics] = useState<IGenericCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const [, , characterId] = props.location.pathname.split('/');

  useEffect(() => {
    actionGetComicsOfCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actionGetComicsOfCharacter = async () => {
    try {
      setLoading(true);
      const response = await getComicsOfCharacters(characterId);
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

        arrayComicTrated.push(comicTrated);
      });

      setComics(arrayComicTrated);
      setLoading(false);
    } catch (error) {
      setLoading(false);
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

  const navigateToDashboard = () => {
    history.push('/dashboard');
  };

  return <ComicInfo navigateToDashboard={navigateToDashboard} loading={loading} comics={comics} />;
};

export default ComicInfoScreen;
