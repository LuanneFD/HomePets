import React from 'react';
import { logout } from '../../session';
import { sessionGet } from '../../session';

import { Menu, Button, ButtonLogout } from './styles';
import { MdPets } from 'react-icons/md';
import { RiUser3Line, RiLogoutBoxLine } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";

export default function CMenu({ history }) {

  return (
    <>
      <Menu>
        <label>Olá {sessionGet('name')}</label>
        <Button to='/perfil'>
          <RiUser3Line />
          <span>Perfil</span>
        </Button>
        {sessionGet('type') == 'D' && (
          <Button to='/meupet'>
            <MdPets />
            <span>Meus Pets</span>
          </Button>
        )}
        {sessionGet('type') == 'P' && (
          <Button to='/meuservico'>
            <FaClipboardList />
            <span>Meus Serviços</span>
          </Button>
        )}
        <ButtonLogout onClick={() => logout()}>
          <RiLogoutBoxLine />
          <span>Logout</span>
        </ButtonLogout>
      </Menu >
    </>
  );
}
