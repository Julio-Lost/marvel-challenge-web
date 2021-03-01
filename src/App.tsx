import { SnackbarProvider } from 'notistack';
import Routes from './routes/routes';
import GlobalStyles from './shared/styles/global';
import { AuthenticationProvider } from './context/reducers/auth/authContext';

function App() {
  return (
    <AuthenticationProvider>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <GlobalStyles />
        <Routes />
      </SnackbarProvider>
    </AuthenticationProvider>
  );
}

export default App;
