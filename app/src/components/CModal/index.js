import React from 'react';

import CButton from '../CButton';

import { Backdrop, WrapModal } from './styles';
import { MdClose } from 'react-icons/md';

export default function CModal({ form, close }) {
  return (
    <Backdrop>
      <WrapModal>
        <CButton
          cstyle='default small closebutton'
          title={(<MdClose />)}
          click={close}
        />
        {form}
      </WrapModal>
    </Backdrop>
  );
}
