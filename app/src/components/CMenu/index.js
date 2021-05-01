import React, { useState, useEffect } from 'react';
import { logout } from '../../session';

import api from '../../services/api';

import { Menu, Button, ButtonLogout } from './styles';
import {
  IoIosAirplane,
  IoIosBasket,
  IoIosPeople
} from 'react-icons/io';

import { RiUser3Line, RiLogoutBoxLine } from "react-icons/ri";
export default function CMenu({ history }) {

  return (
    <>
      <Menu>
        <Button to='/perfil'>
          <RiUser3Line />
          <span>Perfil</span>
        </Button>

        <ButtonLogout onClick={() => logout()}>
          <RiLogoutBoxLine />
          <span>Logout</span>
        </ButtonLogout>
      </Menu >
    </>
  );
}
