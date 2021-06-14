import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import CHeader from '../../components/CHeader';

import { Page, Table } from './styles';
import { Container, TitlePage, Painel } from '../../styles/scglobal';


export default function Servicos() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices();
    }, []);

    const getServices = async () => {
        const response = (await api.get(`/services`)).data;
        setServices(response);
        console.log(response);
    };

    return (
        <Page>
            <CHeader />
            <Container className="container">

                <TitlePage>Serviços</TitlePage>

                <Painel className="painel">
                    <Table>
                        <thead>
                            <tr>
                                <td>Prestador</td>
                                <td>Serviço</td>
                                <td>Duração</td>
                                <td>Tempo</td>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map(service => (
                                <>
                                    <tr>
                                        <td>{service.user.name}</td>
                                        <td>{service.name}</td>
                                        <td>{service.duration}</td>
                                        <td>{service.price}</td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </Table>
                </Painel>

            </Container>
        </Page>
    );
}
