import styled from 'styled-components';
import { SIZES } from '../../../theme/fonts.const';
import { COLORS } from '../../../theme';
import { APP_KEYS } from '../../../common/consts';

export const FilterOptions = styled('div')`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${APP_KEYS.BREAKPOINT_KEYS.DESKTOP}px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  > div {
    display: flex;
    gap: ${SIZES.s};
    overflow-x: auto;
    white-space: nowrap;
    margin-top: ${SIZES.l};

    @media screen and (min-width: ${APP_KEYS.BREAKPOINT_KEYS.DESKTOP}px) {
      margin-top: 0;
    }
  }

  input {
    border: 1px solid ${COLORS.main};
    border-radius: ${SIZES.radius};
    padding: ${SIZES.btn};
    width: 100%;
    max-width: 300px;

    :focus {
      outline: 1px solid ${COLORS.main};
    }
  }
`;
