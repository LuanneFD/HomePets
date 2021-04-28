import React, { useEffect } from 'react';
import { isLogged } from '../../session';

import CFormSearch from '../CFormSearch';

import { MdMenu, MdNotificationsNone, MdAttachMoney } from 'react-icons/md';

import { Topbar, Button } from './styles';

export default function CTopbar() {

  useEffect(() => {
    if (!isLogged()) window.location = '/';
  }, []);

  return (
    <Topbar>
      <div className="leftwrap">
      </div>
      <div className="centerwrap">
        <h1>Control<span>aqui</span></h1>
      </div>
      <div className="rightwrap">
      </div>
    </Topbar>
  );
}
