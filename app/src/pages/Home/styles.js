import styled from 'styled-components';

import colors from '../../presets/colors';

export const Page = styled.div`
  .containerhome {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      color: ${colors.secondary};
      font-size: 40px;
    }
  }
`;