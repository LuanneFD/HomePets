import styled from 'styled-components';

export const Table = styled.table`
  .container {
    .painel{
      margin-top: 25px;
    }
  }

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
    }
  }
`;