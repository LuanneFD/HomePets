import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import CHeader from '../../components/CHeader';
import { sessionGet } from '../../session';
import { Page, Table } from './styles';
import { Container, TitlePage, Painel } from '../../styles/scglobal';


export default function ServicosAgendados() {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        getSchedules();
    }, []);

    const getSchedules = async () => {
        const response = (await api.get(`/schedules`)).data;
        setSchedules(response);
    };

    const filterSchedules = () => {
        return schedules.filter(item => item['service.id_user'] === sessionGet('id'));
    }
    return (
        <>
            <Page>
                <CHeader />
                <Container className="container">

                    <TitlePage>Serviços Contratados</TitlePage>

                    <Painel className="painel">
                        <Table>
                            <thead>
                                <tr>
                                    <td>Serviço</td>
                                    <td>Horário</td>
                                    <td>Cliente</td>
                                    <td>Pet</td>
                                </tr>
                            </thead>
                            <tbody>
                                {filterSchedules().length > 0 && (
                                    <>{
                                        filterSchedules().map(schedule => (
                                            <>
                                                <tr>
                                                    <td>{schedule['service.name']}</td>
                                                    <td>{schedule.time}</td>
                                                    <td>{schedule['user.name']}</td>
                                                    <td>{schedule['pet.name']}</td>
                                                </tr>
                                            </>

                                        ))}
                                    </>
                                )}
                            </tbody>
                        </Table>
                    </Painel>

                </Container>
            </Page>
        </>
    );
}
