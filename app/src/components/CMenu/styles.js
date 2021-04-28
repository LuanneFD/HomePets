import styled from 'styled-components';

import colors from '../../presets/colors';
import { Link } from 'react-router-dom';

export const Menu = styled.nav`
  width: 230px;
  padding: 25px;
  height: calc(100vh - 100px);
  box-shadow: 1px 1px 10px 0px rgba(0,0,0,0.1);
  box-shadow: 0 3px 30px rgba(0,0,0,.1), 0 3px 20px rgba(0,0,0,.1);
`;

export const Button = styled(Link)`
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-bottom: 25px;
  width: 100%;
  text-decoration: none;
  color: ${colors.texts};

  svg {
    font-size: 25px;
    margin-right: 10px;
    color: ${colors.secondary};
  }

  span {
    font-size: 14px;
  }
`;

export const ButtonLogout = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-bottom: 25px;
  width: 100%;
  text-decoration: none;
  color: ${colors.texts};

  svg {
    font-size: 25px;
    margin-right: 10px;
    color: ${colors.secondary};
  }

  span {
    font-size: 14px;
  }
`;
