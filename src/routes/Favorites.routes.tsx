import { Route } from 'react-router-dom';
import FavoritesScreen from '../modules/Favorites/containers/FavoritesScreen';

const FAVORITES_PATH = {
  Main: '/favorites',
};

const FavoritesRoute = () => {
  return <Route path={FAVORITES_PATH.Main} component={FavoritesScreen} />;
};

export { FavoritesRoute, FAVORITES_PATH };
