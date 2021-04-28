import React, { useState, useEffect } from 'react';
import { logout } from '../../session';

import api from '../../services/api';

import { Menu, Button, ButtonLogout } from './styles';
import {
  IoIosAirplane,
  IoIosBasket,
  IoIosPeople
} from 'react-icons/io';

import { RiHandCoinLine, RiBarcodeBoxLine, RiProductHuntLine, RiUser3Line, RiRefund2Line, RiLogoutBoxLine } from "react-icons/ri";
export default function CMenu({ history }) {

  return (
    <>
      <Menu>
        <Button to='/providers'>
          <RiHandCoinLine />
          <span>Fornecedores</span>
        </Button>

        <Button to='/products'>
          <RiProductHuntLine />
          <span>Produtos</span>
        </Button>

        <Button to='/salesmans'>
          <RiUser3Line />
          <span>Vendedores</span>
        </Button>

        <Button to='/sales'>
          <RiBarcodeBoxLine />
          <span>Vendas</span>
        </Button>

        <Button to='/cashs'>
          <RiRefund2Line />
          <span>Controle de caixa</span>
        </Button>

        <ButtonLogout onClick={() => logout()}>
          <RiLogoutBoxLine />
          <span>Logout</span>
        </ButtonLogout>
      </Menu >
    </>
  );
}
