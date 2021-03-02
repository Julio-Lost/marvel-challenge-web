/* eslint-disable react/destructuring-assignment */
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { RequestAddCharacterFavorite } from '../../../models/AddFavoriteCharacter';
import { Card, InfoCard } from '../../../models/Card';
import { getCharactersOfComic } from '../../../services/comic.service';
import { addCharacterFavorite, removeCharacterFavorite } from '../../../services/user.service';
import { IGenericCard } from '../../../shared/components/GenericCard/GenericCard';
import { CharacterInfo } from '../components/CharacterInfo';

export const CharacterInfoScreen: React.FC<RouteComponentProps> = props => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<IGenericCard[]>([]);

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const [, , comicId] = props.location.pathname.split('/');

  useEffect(() => {
    actionGetCharactersOfComic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateToDashboard = () => {
    history.push('/dashboard');
  };

  const actionGetCharactersOfComic = async () => {
    try {
      setLoading(true);
      const response = await getCharactersOfComic(comicId);
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

        arrayCharacterTrated.push(characterTrated);
      });

      setCharacters(arrayCharacterTrated);
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

  return <CharacterInfo characters={characters} loading={loading} navigateToDashboard={navigateToDashboard} />;
};

export default CharacterInfoScreen;
