import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import CHeader from '../../components/CHeader';
import CTable from '../../components/CTable';
import FormSchedules from '../../components/AgendarServico/Form';

import { Page } from './styles';
import { sessionGet } from '../../session';
import { Container, TitlePage, Painel } from '../../styles/scglobal';

export default function AgendarServico() {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        getSchedules();
    }, []);

    const getSchedules = async () => {
        const response = (await api.get(`/schedules/${sessionGet('id')}`)).data;
        setSchedules(response);
        console.log(response);
    };

    return (
        <Page>
            <CHeader />
            <Container className="container">

                <TitlePage>Serviços Contratados</TitlePage>

                <Painel className="painel">
                    <CTable
                        titles={['#', 'Horário', 'Serviço', 'Valor', 'Prestador', 'Pet']}
                        values={schedules}
                        indexes={['id', 'time', 'service.name', 'service.user.name', 'service.price', 'pet.name']}
                        indexesSearch={['service.name']}
                        load={getSchedules}
                        FormCustom={FormSchedules}
                        actionDelete='/schedules'
                    />
                </Painel>
            </Container>
        </Page>
    );
}
