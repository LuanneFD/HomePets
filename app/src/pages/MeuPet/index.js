import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import CHeader from '../../components/CHeader';
import CTable from '../../components/CTable';
import FormPets from '../../components/MeuPet/Form';

import { Page } from './styles';
import { sessionGet } from '../../session';
import { Container, TitlePage, Painel } from '../../styles/scglobal';

export default function MeuPet() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getPets();
    }, []);

    const getPets = async () => {
        const response = (await api.get(`/pets/${sessionGet('id')}`)).data;
        setPets(response);
    };

    return (
        <Page>
            <CHeader />
            <Container className="container">

                <TitlePage>Meus Pets</TitlePage>

                <Painel className="painel">
                    <CTable
                        titles={['#', 'Nome', 'Idade', 'Tipo', 'Raça']}
                        values={pets}
                        indexes={['id', 'name', 'age', 'type', 'breed']}
                        indexesSearch={['name']}
                        load={getPets}
                        FormCustom={FormPets}
                        actionDelete='/pets'
                    />
                </Painel>

            </Container>
        </Page>
    );
}
