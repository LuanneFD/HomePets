import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import CHeader from '../../components/CHeader';
import CInput from '../../components/CInput';
import CSelect from '../../components/CSelect';
import CButton from '../../components/CButton';

import { parseISO, format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { Page } from './styles';
import { Container, Painel } from '../../styles/scglobal';
import { sessionGet } from '../../session';
import { toast } from 'react-toastify';

export default function Perfil() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('');
    const [dateB, setDateB] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState({});

    useEffect(() => getInfoUser(), []);
    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setType(user.type);

        if (user.date_of_birth) {
            var data_final = parseISO(user.date_of_birth);
            data_final = zonedTimeToUtc(data_final, 'America/Sao_Paulo');
            data_final = format(data_final, 'yyyy-MM-dd');
            data_final = data_final.toString();
            setDateB(data_final);
        }

    }, [user]);

    const getInfoUser = async () => {
        const response = (await api.get(`/users/${sessionGet('id')}`)).data;
        setUser(response);
    };

    const handleUpdateUser = async e => {
        e.preventDefault();

        await api.put(`/users/${sessionGet('id')}`, {
            name,
            email,
            type,
            date_of_birth: dateB,
            password
        }).data;

        toast.success('Perfil atualizado com sucesso!');
    }

    return (
        <Page>
            <CHeader />
            <Container className="containerperfil">
                <Painel className="painel-perfil">

                    <form onSubmit={handleUpdateUser}>
                        <CInput cclass="input-perfil" type="text" label="Nome completo" val={name} change={setName} required={true} />
                        <CInput cclass="input-perfil" type="email" label="E-mail" val={email} change={setEmail} required={true} />
                        <CInput cclass="input-perfil" type="date" label="Data de nascimento" val={dateB} change={setDateB} required={true} />
                        <CInput cclass="input-perfil" type="password" label="Senha" val={password} change={setPassword} required={true} />
                        <CSelect
                            label="Qual o seu perfil?"
                            items={[
                                { value: 'D', label: 'Dono de Pet' },
                                { value: 'P', label: 'Prestador de Serviço' },
                            ]}
                            indexLabel="label"
                            indexValue="value"
                            required={true}
                            val={type}
                            change={setType}
                        />
                        <CButton title="Alterar cadastro" cclass="primary" />
                    </form>
                </Painel>
            </Container>
        </Page>
    );
}
