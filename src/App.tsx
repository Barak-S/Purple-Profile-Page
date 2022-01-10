import React, { FC, useEffect, useState } from 'react';
import Home from './Screens/Home';
import NavBar from './layout/NavBar';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { routes } from './core';
import '@shopify/polaris/build/esm/styles.css';
import Translations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import { User } from './utils/types'

const App: FC = () => {
  const [user, setUser] = useState<User>({})

  useEffect(()=>{
    fetch('http://localhost:5000/api/users/61dc3d4201f9a429699fedbc')
    .then(resp=>resp.json())
    .then(user=>setUser(user))
  }, [])
  
  return (
  <AppProvider i18n={Translations}>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={routes.index}>
          <Home user={user} />
        </Route>
        <Redirect to={routes.index} />
      </Switch>
    </Router>
  </AppProvider>
  );
}

export default App;
