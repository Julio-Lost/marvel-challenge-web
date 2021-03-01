import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import { CustomRoute } from '../shared/components/CustomRoute/CustomRoute';
import { LOGIN_PATH, LoginRoute } from './Login.routes';
import { SIGNUP_PATH, SignUpRoute } from './SignUp.routes';
import { DASHBOARD_PATH, DashboardRoute } from './Dashboard.routes';
import { FAVORITES_PATH, FavoritesRoute } from './Favorites.routes';
import InfoRoute, { INFO_PATH } from './Info.routes';
import { PROFILE_PATH, ProfileRoute } from './Profile.routes';

const Routes = () => {
  const ReturnLogin = () => <Redirect to="/dashboard" />;

  const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path={LOGIN_PATH.Main} component={LoginRoute} />
        <Route exact path={SIGNUP_PATH.Main} component={SignUpRoute} />
        <CustomRoute exact path={DASHBOARD_PATH.Main} component={DashboardRoute} isPrivate headerActive />
        <CustomRoute exact path={FAVORITES_PATH.Main} component={FavoritesRoute} isPrivate headerActive />
        <CustomRoute exact path={INFO_PATH.CharacterInfo} component={InfoRoute} isPrivate headerActive />
        <CustomRoute exact path={INFO_PATH.ComicInfo} component={InfoRoute} isPrivate headerActive />
        <CustomRoute exact path={PROFILE_PATH.Main} component={ProfileRoute} isPrivate headerActive />
        <Route path="*" component={ReturnLogin} />
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
