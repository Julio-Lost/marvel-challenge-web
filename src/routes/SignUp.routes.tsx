import { Route } from 'react-router-dom';
import SignUpScreen from '../modules/SignUp/containers/SignUpScreen';

const SIGNUP_PATH = {
  Main: '/signup',
};

const SignUpRoute = () => {
  return <Route path={SIGNUP_PATH.Main} component={SignUpScreen} />;
};

export { SignUpRoute, SIGNUP_PATH };
