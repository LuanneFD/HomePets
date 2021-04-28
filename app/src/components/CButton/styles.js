import styled from 'styled-components';

import { darken } from 'polished';

export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.1);
  font-weight: 700;
  text-transform: uppercase;
  height: 45px;
  color: #333;
  border: 0;
  padding: 0 50px;
  border-radius: 25px;
  letter-spacing: 1px;
  box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.29);
  transition: background-color .5s;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:disabled { background-color: gray !important; }

  svg {
    font-size: 18px;
    margin-right: 5px;
  }

  &.default {
    background-color: transparent;
    box-shadow: none;
    color: #303030;

    &.small { height: 35px; padding: 0 25px; font-weight: 500; }

    &:hover {
      color: #606060;
    }
  }

  &.primary {
    background-color: #1045DB;
    color: white;

    &.small { height: 35px; padding: 0 25px; font-weight: 500; }

    &:hover {
      background: ${darken(0.07, '#1045DB')}
    }
  }

  &.success {
    background-color: #0fdd4d;
    color: white;

    &.small { height: 35px; padding: 0 25px; font-weight: 500; }

    &:hover {
      background: ${darken(0.07, '#0fdd4d')}
    }
  }

  &.warning {
    background-color: #ff9900;
    color: white;

    &.small { height: 35px; padding: 0 25px; font-weight: 500; }

    &:hover {
      background: ${darken(0.07, '#ff9900')}
    }
  }

  &.danger {
    background-color: #ff3300;
    color: white;

    &.small { height: 35px; padding: 0 25px; font-weight: 500; }

    &:hover {
      background: ${darken(0.07, '#ff3300')}
    }
  }
`;
