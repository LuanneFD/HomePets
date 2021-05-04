import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import CInput from '../../CInput';
import CButton from '../../CButton';

import { toast } from 'react-toastify';
import { WrapForm } from './styles';
import { sessionGet } from '../../../session';


export default function Form({ item, success, close }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [breed, setBreed] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        setName(item.name);
        setAge(item.age);
        setBreed(item.breed);
        setType(item.type);
    }, [item]);


    const submitForm = async e => {
        e.preventDefault();

        let response;

        if (item.id) {
            response = (await api.put(`/pets/${item.id}`, {
                name,
                age,
                breed,
                type,
                id_user: sessionGet('id')
            })).data;
        } else {
            response = (await api.post('/pets', {
                name,
                age,
                breed,
                type,
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
            <h2>{`${(item.id) ? 'Edição' : 'Cadastro'} de pet`}</h2>
            <CInput val={name} required={true} change={e => setName(e)} type='text' label='Nome' />
            <CInput val={age} required={true} change={e => setAge(e)} type='number' label='Idade' />
            <CInput placeholder='Exemplo:Cachorro,Gato' val={type} required={true} change={e => setType(e)} type='text' label='Tipo' />
            <CInput val={breed} required={true} change={e => setBreed(e)} type='text' label='Raça' />
            <CButton title='Salvar' cstyle='primary small' />
        </WrapForm>
    );
}
