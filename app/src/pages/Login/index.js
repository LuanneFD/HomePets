import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { sessionSet, isLogged } from '../../session';
import { toast } from 'react-toastify';

import { Container } from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isLogged()) window.location = '/home';
  }, []);

  const login = async e => {
    e.preventDefault();

    if (email != '' && password !== '') {

      const response = (await api.post('/users/login', { email, password })).data;

      if (response != null) {
        window.location = '/home';

        sessionSet(response.user);

      } else {
        toast.error("Email/Senha incorretos ou usuário não cadastrado no sistema");
      }
    } else {
      toast.error("Os campos não podem estar vazios!");
    }
  };

  return (
    <Container>
      <form onSubmit={login}>
        <h1>HomePets</h1>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="/cadastro">Cadastre-se</a>
      </form>
    </Container>
  );
}

export default Login;