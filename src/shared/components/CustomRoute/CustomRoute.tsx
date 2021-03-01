import React, { ComponentType } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuthenticationContext } from '../../../context/reducers/auth/authContext';
import Layout from '../Layout';

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
  headerActive: boolean;
}

export const CustomRoute = ({ isPrivate = true, headerActive, component: Component, ...rest }: CustomRouteProps) => {
  const { state } = useAuthenticationContext();

  const authenticated = state.user.token;
  const openRoute = !isPrivate;

  const privateRoute = () => {
    if (isPrivate) {
      if (authenticated) {
        return (
          <Layout headerActive={headerActive}>
            <Component />
          </Layout>
        );
      }
      return <Redirect to="/" />;
    }
    if (openRoute && authenticated) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <Layout headerActive={headerActive}>
        <Component />
      </Layout>
    );
  };

  return <Route {...rest} render={privateRoute} />;
};
