import styled from 'styled-components';
import { SIZES } from '../../../theme/fonts.const';

export const Table = styled('table')`
  width: 100%;
  border: 1px solid;
  border-collapse: collapse;

  th,
  td {
    padding: ${SIZES.m};
    text-align: left;
    border: 1px solid;
  }
`;

export const TodoTitle = styled('th')`
  width: 250px;
`;

export const Actions = styled('td')`
  width: 350px;
  > div {
    display: flex;
    align-items: center;
    gap: ${SIZES.m};
  }
`;

export const Pagination = styled('div')`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: ${SIZES.m};
`;
