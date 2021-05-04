import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import CInput from '../../CInput';
import CButton from '../../CButton';

import { toast } from 'react-toastify';
import { WrapForm } from './styles';
import { sessionGet } from '../../../session';


export default function Form({ item, success, close }) {

    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        setName(item.name);
        setDuration(item.duration);
        setPrice(item.price);
    }, [item]);


    const submitForm = async e => {
        e.preventDefault();

        let response;

        if (item.id) {
            response = (await api.put(`/services/${item.id}`, {
                name,
                duration,
                price,
                id_user: sessionGet('id')
            })).data;
        } else {
            response = (await api.post('/services', {
                name,
                duration,
                price,
                id_user: sessionGet('id')
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
            <h2>{`${(item.id) ? 'Edição' : 'Cadastro'} de serviço`}</h2>
            <CInput val={name} required={true} change={e => setName(e)} type='text' label='Nome' />
            <CInput val={duration} required={true} change={e => setDuration(e)} class='number' mask="99h99m" type="text" label='Duração' />
            <CInput val={price} required={true} change={e => setPrice(e)} type='text' class='money' mask="R$ 999,99" label='Preço' />
            <CButton title='Salvar' cstyle='primary small' />
        </WrapForm>
    );
}
