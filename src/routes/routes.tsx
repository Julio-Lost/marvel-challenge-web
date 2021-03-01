import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

import { LOGIN_PATH, LoginRoute } from './Login.routes';
import { SIGNUP_PATH, SignUpRoute } from './SignUp.routes';
import { DASHBOARD_PATH, DashboardRoute } from './Dashboard.routes';
import { FAVORITES_PATH, FavoritesRoute } from './Favorites.routes';
import InfoRoute, { INFO_PATH } from './Info.routes';

const Routes = () => {
  const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path={LOGIN_PATH.Main} component={LoginRoute} />
        <Route exact path={SIGNUP_PATH.Main} component={SignUpRoute} />
        <Route exact path={DASHBOARD_PATH.Main} component={DashboardRoute} />
        <Route exact path={FAVORITES_PATH.Main} component={FavoritesRoute} />
        <Route exact path={INFO_PATH.CharacterInfo} component={InfoRoute} />
        <Route exact path={INFO_PATH.ComicInfo} component={InfoRoute} />
      </Switch>
    </BrowserRouter>
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

export default Routes;
