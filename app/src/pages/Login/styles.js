import styled from 'styled-components';

import colors from '../../presets/colors';
import effects from '../../presets/effects';

import bg from '../../assets/pexels-snapwire-38867.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${bg});
  background-position: center;
  background-size: cover;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.8);
    border-top: 3px solid ${colors.secondary};
    border-radius: 5px;
    width: 20%;
 
 a { color:white}
    h1 {
      color: white;
      text-transform: uppercase;
      letter-spacing: 2px;

      span { color: ${colors.secondary} }
    }

    input {
      width: 80%;
      height: 50px;
      padding: 0 10px;
      margin: 25px 0 0;
      background-color: transparent;
      border: 0;
      border-bottom: 2px solid ${colors.secondary};
      color: white;
      font-size: 18px;
    }

    button {
      width: 60%;
      margin-top: 50px;
      padding: 10px 0;
      font-size: 18px;
      color: white;
      background-color: #00a6ff;
      border-radius: 10px;
      text-transform: uppercase;
      border: 0;
      box-shadow: ${effects.boxshadow};
    }

  }
`;
