import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

import { LOGIN_PATH, LoginRoute } from './Login.routes';
import { SIGNUP_PATH, SignUpRoute } from './SignUp.routes';

const Routes = () => {
  const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path={LOGIN_PATH.Main} component={LoginRoute} />
        <Route exact path={SIGNUP_PATH.Main} component={SignUpRoute} />
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
