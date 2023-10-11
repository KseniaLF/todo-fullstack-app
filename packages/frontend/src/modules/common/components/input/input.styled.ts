import { Field } from 'formik';
import styled from 'styled-components';
import { COLORS } from '../../../theme';
import { SIZES } from '../../../theme/fonts.const';

export const Input = styled(Field)`
  border: 1px solid ${COLORS.main};
  border-radius: ${SIZES.radius};
  padding: ${SIZES.btn};

  :focus {
    outline: 1px solid ${COLORS.main};
  }
`;

export const Error = styled('p')`
  color: ${COLORS.error};
`;
