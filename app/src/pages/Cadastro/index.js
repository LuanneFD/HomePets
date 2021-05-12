import React, { useState, useEffect } from 'react';

// chamar api
import api from '../../services/api';

// Mostrar alertas
import { toast } from 'react-toastify';

// css
import { Container } from './styles';

// controle de sessao, saber se o usuario esta logado ou nao
import { isLogged } from '../../session/index.js';

function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    const [password, setPassword] = useState('');

    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (isLogged()) {
            window.location = "/app/home";
        }
    }, []);

    const cadastro = async e => {
        e.preventDefault();

        const response = (await api.post('/users', {
            name,
            email,
            type,
            date_of_birth: date,
            password
        })).data;

        if (response.result === 'success') {
            toast.success('Usuário cadastrado com sucesso!');
            setIsSuccess(true);
        } else {

            toast.error('E-mail já cadastrado no sistema!');
        }
    };

    return (
        <Container>
            <div className="filter">

                <form onSubmit={cadastro}>
                    {!isSuccess && (
                        <>
                            <p>
                                Preencha o cadastro abaixo para ter acesso à plataforma:
                            </p>
                            <div className="input-group">
                                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome completo" />
                                <input type="date" value={date} onChange={e => setDate(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
                            </div>
                            <div className="input-group">
                                <select value={type} onChange={e => setType(e.target.value)}>
                                    <option value="">Qual o seu perfil?</option>
                                    <option disabled></option>
                                    <option value="D">Dono de Pet</option>
                                    <option value="P">Prestador de Serviços</option>
                                </select>
                            </div>
                            <div className="wrap-actions">
                                <button type="submit">Cadastrar</button>
                            </div>
                        </>
                    )}
                    {isSuccess && (
                        <>
                            <p>
                                Cadastro efetuado com sucesso!!
                            </p>
                            <button type="button" onClick={() => window.location = '/'}>Ir para página de login!</button>
                        </>
                    )}
                </form>
            </div>
        </Container>
    );
}

export default Cadastro;