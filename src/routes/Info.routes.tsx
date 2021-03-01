import { LinearProgress } from '@material-ui/core';
import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterInfoScreen from '../modules/CharacterInfo/containers/CharacterInfoScreen';
import ComicInfoScreen from '../modules/ComicInfo/containers/ComicInfoScreen';

export const INFO_PATH = {
  CharacterInfo: '/character-info',
  ComicInfo: '/comic-info',
};

const InfoRoutes = () => {
  const routes = (
    <Switch>
      <Route exact path={INFO_PATH.CharacterInfo} component={CharacterInfoScreen} />
      <Route exact path={INFO_PATH.ComicInfo} component={ComicInfoScreen} />
    </Switch>
  );

  return (
    <Suspense
      fallback={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <>
          <LinearProgress color="primary" />
          <LinearProgress color="secondary" />
        </>
      }>
      {routes}
    </Suspense>
  );
};

export default InfoRoutes;
