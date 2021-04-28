import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 15px;
    height: 15px;
    border: 2px solid gray;
    border-radius: 2px;
    cursor: pointer;

    &.in {
      background-color: gray;
    }
  }
`;
