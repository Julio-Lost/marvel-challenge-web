import { useHistory } from 'react-router-dom';
import { Dashboard } from '../components/Dashboard';

export const DashboardScreen = () => {
  const history = useHistory();

  const navigateToFavorites = () => {
    history.push('/favorites');
  };

  return <Dashboard navigateToFavorites={navigateToFavorites} />;
};

export default DashboardScreen;
