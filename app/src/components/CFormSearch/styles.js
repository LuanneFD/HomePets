import styled from 'styled-components';

export const Form = styled.form`
  background-color: rgba(255, 255, 255, 0.1);
  width: 230px;
  height: 40px;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  box-shadow: 0 1px 15px rgba(0,0,0,.04), 
  0 1px 6px rgba(0,0,0,.04);

  svg {
    color: rgba(255, 255, 255, 0.2);
    font-size: 22px;
    margin-left: 5px;
  }

  &.dark {
    background-color: rgba(0, 0, 0, 0.1);
    color: #303030;

    svg {
      color: #333;
    }
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border-radius: 20px;
  height: 100%;
  padding: 0 10px;
  border: 0;
  outline: none;
  color: #fff;

  &.dark {
    color: #303030;
  }
`;
