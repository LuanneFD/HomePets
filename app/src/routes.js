import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Perfil from './pages/Perfil';
import MeuPet from './pages/MeuPet';
import Servicos from './pages/Servicos';
import MeuServico from './pages/MeuServico';
import AgendarServico from './pages/AgendarServico';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/cadastro" exact component={Cadastro} />
      <Route path="/perfil" exact component={Perfil} />
      <Route path="/meupet" exact component={MeuPet} />
      <Route path="/servicos" exact component={Servicos} />
      <Route path="/meuservico" exact component={MeuServico} />
      <Route path="/agendarservico" exact component={AgendarServico} />
    </Switch>
  );
}