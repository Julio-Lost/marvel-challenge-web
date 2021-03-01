import { useHistory } from 'react-router-dom';
import { Favorites } from '../components/Favorites';

export const FavoritesScreen = () => {
  const history = useHistory();

  const navigateToDashboard = () => {
    history.push('/dashboard');
  };

  return <Favorites navigateToDashboard={navigateToDashboard} />;
};

export default FavoritesScreen;
