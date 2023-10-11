import styled from 'styled-components';
import { COLORS } from './colors.const';
import { SIZES } from './fonts.const';

export const Button = styled('button')`
  outline: none;
  border: none;
  border-radius: ${SIZES.radius};
  background-color: ${COLORS.main};
  color: #fff;
  padding: ${SIZES.btn};
  cursor: pointer;

  transition: all 150ms linear;
  :hover {
    background-color: ${COLORS.mainHover};
  }
`;
