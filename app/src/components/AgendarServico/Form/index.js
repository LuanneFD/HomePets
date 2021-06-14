import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import CSelect from '../../CSelect';
import CButton from '../../CButton';

import { toast } from 'react-toastify';
import { WrapForm } from './styles';
import { sessionGet } from '../../../session';


export default function Form({ item, success, close }) {

    const [id_service, setIdService] = useState(0);
    const [id_pet, setIdPet] = useState(0);
    const [time, setTime] = useState('');

    const [user, setUser] = useState(0);
    const [services, setServices] = useState([]);
    const [pets, setPets] = useState([]);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        setIdService(item.id_service);
        setIdPet(item.id_pet);
        setTime(item.time);
    }, [item]);

    useEffect(() => {
        getPets();
        getUser();
    }, []);

    useEffect(() => {
        getServices();
    }, [user]);



    const getServices = async () => {
        const response = (await api.get(`/services?id=${user}`)).data;
        setServices(response);
    };

    const getPets = async () => {
        const response = (await api.get(`/pets/${sessionGet('id')}`)).data;
        setPets(response);
    };

    const getUser = async () => {
        const response = (await api.get(`/providers`)).data;
        setUsers(response);
    };

    const submitForm = async e => {
        e.preventDefault();

        let response;

        if (item.id) {
            response = (await api.put(`/schedules/${item.id}`, {
                id_service,
                id_pet,
                id_user: sessionGet('id'),
                time
            })).data;
        } else {
            response = (await api.post('/schedules', {
                id_service,
                id_pet,
                id_user: sessionGet('id'),
                time,
            })).data;
        }

        if (response.success) {
            toast.success(response.message);
            success();
            close();
        } else {
            toast.error(response.message);
        }
    };

    return (
        <WrapForm onSubmit={submitForm}>
            <h2>{`${(item.id) ? 'Edição' : 'Registro'} de contratação`}</h2>
            <CSelect cclass="input-r" label='Prestador' val={user} indexValue='id' indexLabel='name' change={e => setUser(e)} items={users} />
            <CSelect cclass="input-r" label='Serviço' cDisabled={user === 0} val={id_service} indexValue='id' indexLabel='name' change={e => setIdService(e)} items={services} />
            <CSelect cclass="input-r" label='Pet' val={id_pet} indexValue='id' indexLabel='name' change={e => setIdPet(e)} items={pets} />
            <CSelect
                label="Horário"
                items={[
                    { value: '08:00h', label: '08:00h' },
                    { value: '10:00h', label: '10:00h' },
                    { value: '13:00h', label: '13:00h' },
                    { value: '15:00h', label: '15:00h' }
                ]}
                indexLabel="label"
                indexValue="value"
                required={true}
                val={time}
                change={setTime}
            />
            <CButton title='Salvar' cstyle='primary small' />
        </WrapForm>
    );
}
