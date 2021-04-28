import styled from 'styled-components';

import colors from '../presets/colors';

export const Container = styled.div`
  width: calc(100vw - 230px);
  height: calc(100vh - 100px);
  position: absolute;
  top: 100px;
  left: 230px;
  padding: 25px;
`;

export const TitlePage = styled.h1`
  font-weight: 400;
  margin: 0;
  color: ${colors.texts};
`;

export const Painel = styled.div`
  width: 100%;
  background-color: white;
  padding: 25px;
  box-shadow: 0 3px 30px rgba(0,0,0,.1), 0 3px 20px rgba(0,0,0,.1);
`;

