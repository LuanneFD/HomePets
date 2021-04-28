import styled from 'styled-components';

import colors from '../../presets/colors';

export const Topbar = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 30px rgba(0,0,0,.1), 0 3px 20px rgba(0,0,0,.1);

  .leftwrap {
    width: 33%;
    display: flex;

    form {
      margin-left: 5%;
    }

    button {
      margin-left: 25px;
    }
  }

  .centerwrap {
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      color: #fff;
      letter-spacing: 2px;
      margin: 0;
      font-size: 1.8rem;
      font-weight: 500;
      text-transform: uppercase;

      span {
        color: ${colors.secondary};
        margin: 0 2px;
      }
    }
  }

  .rightwrap {
    width: 33%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      margin-right: 25px;
    }
  }
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &.btnuser {

    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      object-fit: cover;
      object-position: top;
      margin-left: 10px;
    }

    span { color: #fff }

  }

  &.btnmoney {
    strong { color: white; }
    svg { color: white; }
  }
  
  svg {
    font-size: 22px;
    color: #fff;
  }
`;