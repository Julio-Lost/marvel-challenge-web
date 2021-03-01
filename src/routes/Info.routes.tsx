import { Route } from 'react-router-dom';
import CharacterInfoScreen from '../modules/CharacterInfo/containers/CharacterInfoScreen';

const INFO_PATH = {
  CharacterInfo: '/character-info',
};

const InfoRoute = () => {
  return <Route path={INFO_PATH.CharacterInfo} component={CharacterInfoScreen} />;
};

export { InfoRoute, INFO_PATH };
