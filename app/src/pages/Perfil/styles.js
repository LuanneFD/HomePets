import styled from 'styled-components';

import colors from '../../presets/colors';

export const Page = styled.div`
  .containerperfil {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      color: ${colors.secondary};
      font-size: 40px;
    }

    .painel-perfil {
      width:50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 25px;

        form {
          width: 80%;
          margin-top: 25px;
          
        }
    }
  }
`;