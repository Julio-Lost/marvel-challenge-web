import { Route } from 'react-router-dom';
import DashboardScreen from '../modules/Dashboard/containers/DashboardScreen';

const DASHBOARD_PATH = {
  Main: '/dashboard',
};

const DashboardRoute = () => {
  return <Route path={DASHBOARD_PATH.Main} component={DashboardScreen} />;
};

export { DashboardRoute, DASHBOARD_PATH };
