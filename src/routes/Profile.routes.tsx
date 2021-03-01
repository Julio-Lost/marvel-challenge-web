import { Route } from 'react-router-dom';
import ProfileScreen from '../modules/Profile/containers/ProfileScreen';

const PROFILE_PATH = {
  Main: '/profile',
};

const ProfileRoute = () => {
  return <Route path={PROFILE_PATH.Main} component={ProfileScreen} />;
};

export { ProfileRoute, PROFILE_PATH };
