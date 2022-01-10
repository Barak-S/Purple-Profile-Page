import React, { FC } from 'react';
import Home from './Screens/Home';
import NavBar from './layout/NavBar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './assets/themes/theme';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { routes } from './core';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, Card, Button } from '@shopify/polaris';

const App: FC = () => {
  return (
  // <MuiThemeProvider theme={theme}>
  //   <CssBaseline />
  <AppProvider i18n={enTranslations}>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={routes.index}>
          <Home />
        </Route>
        <Redirect to={routes.index} />
      </Switch>
    </Router>
  </AppProvider>
  // </MuiThemeProvider>
  );
}

export default App;
