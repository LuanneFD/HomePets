import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const WrapModal = styled.div`
  background-color: white;
  width: 20vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0; 
  padding: 75px 25px;

  .closebutton {
    position: absolute;
    top: 10px;
    right: 0;
  }
`;