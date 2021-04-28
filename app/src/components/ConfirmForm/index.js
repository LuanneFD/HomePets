import React from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

import CButton from '../CButton';

import { Form } from './styles';
import { MdDoneAll, MdClose } from 'react-icons/md';

export default function ConfirmForm({ action, close, items, success }) {

  const submitConfirm = async e => {
    e.preventDefault();

    const response = (await api.delete(action + `/${items}`)).data;

    if (response.success) {
      toast.success(response.message);
      close();
      success();
    } else {
      toast.error(response.message);
    }
  };

  return (
    <Form onSubmit={submitConfirm}>
      <p>Para executar esta ação você precisa confirmar:</p>
      <div className='wrapbuttons'>
        <CButton ctype='submit' cstyle='success small' title={(<><MdDoneAll /> Confirmar</>)} />
        <CButton ctype='button' click={close} cstyle='danger small' title={(<><MdClose /> Cancelar</>)} />
      </div>
    </Form>
  );
}
