import styled from 'styled-components';
import { SIZES } from '../../../theme/fonts.const';

export const TodoListContainer = styled('ul')`
  padding: 0;
  margin: 0;
  margin-top: ${SIZES.m};
  display: flex;
  flex-direction: column;
  gap: ${SIZES.l};
`;
