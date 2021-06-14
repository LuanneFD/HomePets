import React from 'react';
import { logout } from '../../session';
import { sessionGet } from '../../session';

import { Menu, Button, ButtonLogout } from './styles';
import { MdPets } from 'react-icons/md';
import { BsCardList, BsListCheck } from 'react-icons/bs';
import { RiUser3Line, RiLogoutBoxLine } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";

export default function CMenu({ history }) {

  return (
    <>
      <Menu>
        <label>Olá {sessionGet('name')}</label>
        <Button onClick={() => window.location = '/perfil'}>
          <RiUser3Line />
          <span>Perfil</span>
        </Button>
        {sessionGet('type') == 'D' && (
          <>
            <Button onClick={() => window.location = '/meupet'}>
              <MdPets />
              <span>Meus Pets</span>
            </Button>
            <Button onClick={() => window.location = '/servicos'}>
              <BsCardList />
              <span>Serviços Disponíveis</span>
            </Button>
            <Button onClick={() => window.location = '/agendarservico'}>
              <BsListCheck />
              <span>Serviços Contratados</span>
            </Button>
          </>
        )}
        {sessionGet('type') == 'P' && (
          <>
            <Button onClick={() => window.location = '/meuservico'}>
              <FaClipboardList />
              <span>Meus Serviços</span>
            </Button>
            <Button onClick={() => window.location = '/servicosagendados'}>
              <BsListCheck />
              <span>Serviços Agendados</span>
            </Button>
          </>
        )}
        <ButtonLogout onClick={() => logout()}>
          <RiLogoutBoxLine />
          <span>Logout</span>
        </ButtonLogout>
      </Menu >
    </>
  );
}
