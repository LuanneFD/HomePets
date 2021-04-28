import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';

import { WrapForm } from './styles';

import CInput from '../../CInput';
import CSelect from '../../CSelect';
import CButton from '../../CButton';

export default function Form({ item, success, close }) {

  const [method, setMethod] = useState('');
  const [value, setValue] = useState('');


  useEffect(() => {
    setMethod(item.method);
    setValue(item.value);
  }, [item]);

  const submitForm = async e => {
    e.preventDefault();

    let response;

    if (item.id) {
      response = (await api.put(`/cashs/${item.id}`, {
        method,
        value: value,
      })).data;
    } else {
      response = (await api.post('/cashs', {
        method,
        value: value,
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
      <h2>{`${(item.id) ? 'Edição' : 'Cadastro'} de transação`}</h2>
      <CSelect label='Transação' indexValue='id' indexLabel='name' val={method} change={e => { setMethod(e); console.log(e) }} required={true} items={[
        {
          id: 'add',
          name: 'Creditar'
        },
        {
          id: 'remove',
          name: 'Debitar'
        },
      ]} />
      <CInput val={value} required={true} change={e => setValue(e)} type='number' label='Valor' />

      <CButton title='Salvar' cstyle='primary small' />
    </WrapForm>
  );
}
