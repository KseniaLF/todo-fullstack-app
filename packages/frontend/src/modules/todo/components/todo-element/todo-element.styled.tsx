import styled from 'styled-components';
import { SIZES } from '../../../theme/fonts.const';

export const TodoElementContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.m};
`;

export const Actions = styled('div')`
  display: flex;
  align-items: center;
  gap: ${SIZES.m};

  button {
    margin-right: ${SIZES.s};
  }
`;
