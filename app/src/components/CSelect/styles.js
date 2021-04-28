import styled from 'styled-components';

import colors from '../../presets/colors';

export const WrapCustomSelect = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 25px 0;
  transition: border-color .5s;
  
  &:focus-within {
    border-color: ${colors.secondary};

    label {
      color: ${colors.secondary};
    }
  }
`;

export const LabelCustomSelect = styled.label`
  background-color: white;
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 14px;
  padding: 0 5px;
  z-index: 1050;
  color: rgba(0, 0, 0, 0.5);
  transition: color .5s;
`;

export const CustomSelect = styled.select`
  background-color: transparent;
  border: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  font-size: .8rem;
  outline: none;
  font-weight: 500;
  color: #444;
`;


