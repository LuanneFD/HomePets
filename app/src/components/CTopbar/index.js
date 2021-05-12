import React, { useEffect } from 'react';
import { isLogged } from '../../session';
import { Topbar } from './styles';

export default function CTopbar() {

  useEffect(() => {
    if (!isLogged()) window.location = '/';
  }, []);

  return (
    <Topbar>
      <div className="leftwrap">
      </div>
      <div className="centerwrap">
        <h1>HomePets</h1>
      </div>
      <div className="rightwrap">
      </div>
    </Topbar>
  );
}
