import styled from 'styled-components';
import { SIZES, FONT_SIZES } from '../../../theme/fonts.const';

export const TodoPage = styled('div')`
  padding: ${SIZES.l} ${SIZES.h};

  h2 {
    font-size: ${FONT_SIZES.l};
  }

  p {
    font-size: ${FONT_SIZES.m};
  }
  cursor: default;
`;

export const Todo = styled('div')`
  margin-bottom: ${SIZES.m};
  display: flex;
  flex-direction: column;
  gap: ${SIZES.m};
`;

export const TodoActions = styled('div')`
  display: flex;
  gap: ${SIZES.m};
`;

export const SwitchContainer = styled('div')`
  display: flex;
  gap: ${SIZES.h};
  text-align: center;
`;
