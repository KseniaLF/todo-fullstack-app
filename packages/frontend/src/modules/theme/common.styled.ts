import styled from 'styled-components';
import { COLORS } from './colors.const';
import { SIZES } from './fonts.const';

interface ButtonProps {
  inactive?: boolean;
  disabled?: boolean;
}

export const Button = styled('button')<ButtonProps>`
  outline: none;
  border: none;
  border-radius: ${SIZES.radius};
  background-color: ${COLORS.main};
  color: #fff;
  padding: ${SIZES.btn};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  transition: all 150ms linear;
  :hover {
    background-color: ${({ disabled }) => (disabled ? COLORS.disabled : COLORS.mainHover)};
  }
  background-color: ${({ inactive, disabled }) =>
    inactive || disabled ? COLORS.disabled : COLORS.main};
`;
