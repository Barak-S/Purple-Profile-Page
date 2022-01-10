import React, { FC, useEffect, useState } from 'react';
import NavBar from './layout/NavBar';
import Home from './Screens/Home';
import EditProfile from './Screens/EditProfile';
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
import { User } from './utils/types';

const App: FC = () => {
  const [user, setUser] = useState<User>({})

  useEffect(()=>{
    fetch('/api/users/61dc3d4201f9a429699fedbc')
      .then(resp=>resp.json())
      .then(user=>setUser(user))
  }, [])

  const updateUser = (data: User) => {
    fetch(`/api/users/update/${data?._id}`,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: data?._id, user: data })
    })
      .then(resp=>resp.json())
      .then(user=>{
        console.log('Success!', user)
        setUser(user)
      })
  }

  return (
  <AppProvider i18n={Translations}>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={routes.index}>
          <Home user={user} />
        </Route>
        <Route exact path={routes.editProfile}>
          <EditProfile updateUser={updateUser} user={user} />
        </Route>
        <Redirect to={routes.index} />
      </Switch>
    </Router>
  </AppProvider>
  );
}

export default App;
