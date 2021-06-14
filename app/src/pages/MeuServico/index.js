import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import CHeader from '../../components/CHeader';
import CTable from '../../components/CTable';
import FormServicos from '../../components/MeuServico/Form';

import { Page } from './styles';
import { sessionGet } from '../../session';
import { Container, TitlePage, Painel } from '../../styles/scglobal';

export default function MeuServico() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices();
    }, []);

    const getServices = async () => {
        const response = (await api.get(`/services/?id=${sessionGet('id')}`)).data;
        setServices(response);
        console.log(response);
    };

    return (
        <Page>
            <CHeader />
            <Container className="container">

                <TitlePage>Meus Serviços</TitlePage>

                <Painel className="painel">
                    <CTable
                        titles={['#', 'Nome', 'Duração', 'Preço']}
                        values={services}
                        indexes={['id', 'name', 'duration', 'price']}
                        indexesSearch={['name']}
                        load={getServices}
                        FormCustom={FormServicos}
                        actionDelete='/services'
                    />
                </Painel>

            </Container>
        </Page>
    );
}
