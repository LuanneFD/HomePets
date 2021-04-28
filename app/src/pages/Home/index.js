import React from 'react';

import CHeader from '../../components/CHeader';

import { Page } from './styles';
import { Container, TitlePage, Painel } from '../../styles/scglobal';

export default function Home() {
  return (
    <Page>
      <CHeader />
      <Container className="containerhome">

        <TitlePage>Seja muito bem-vindo(a)!</TitlePage>

      </Container>
    </Page>
  );
}
