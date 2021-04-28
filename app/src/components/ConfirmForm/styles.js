import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  p { font-size: 20px; font-weight: 500; }

  .wrapbuttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;

    button { margin: 0 10px;}
  }
`;
