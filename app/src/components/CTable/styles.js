import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;

  td { height: 50px; padding: 10px; }

  thead {
    tr td {
      font-weight: 600;
    }
  }

  tbody {
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    td { 
      border: 0;

      &.actionstable {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;

export const Tools = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  .wrapbuttons {
    display: flex;

    button {
      margin-right: 10px;
    }
  }
`;
