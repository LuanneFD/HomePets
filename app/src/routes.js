import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Perfil from './pages/Perfil';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/cadastro" exact component={Cadastro} />
      <Route path="/perfil" exact component={Perfil} />
    </Switch>
  );
}