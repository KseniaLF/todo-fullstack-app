import styled from 'styled-components';
import { SIZES } from '../../../theme/fonts.const';

export const Todo = styled('div')`
  padding: ${SIZES.m};
  display: flex;
  flex-direction: column;
  gap: ${SIZES.l};
`;
