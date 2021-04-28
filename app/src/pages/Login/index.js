import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import api from '../../services/api';
import { sessionSet, isLogged } from '../../session';
import { toast } from 'react-toastify';

import { Container } from './styles';

function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    if (isLogged()) window.location = '/home';
  }, []);

  const login = async e => {
    e.preventDefault();

    if (!cpf.includes('_') && senha !== '') {

      const response = (await api.post('/login', { cpf, password: senha })).data;

      if (response.success) {
        window.location = '/home';

        sessionSet(response.salesman);

      } else {
        toast.error("CPF e/ou senha não cadastrados no sistema!");
      }
    } else {
      toast.error("Os campos não podem estar vazios!");
    }
  };

  return (
    <Container>
      <form onSubmit={login}>
        <h1>HomePets</h1>
        <InputMask mask="999.999.999-99" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="CPF" />;
        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}

export default Login;