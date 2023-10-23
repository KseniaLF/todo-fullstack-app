import styled from 'styled-components';
import { SIZES } from '../../../theme/fonts.const';

export const HeaderContainer = styled('header')`
  padding: ${SIZES.m};
  padding-bottom: 0;
  display: flex;
  justify-content: end;
  gap: ${SIZES.s};
`;
