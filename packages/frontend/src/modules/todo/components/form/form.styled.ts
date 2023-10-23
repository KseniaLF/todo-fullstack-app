import { Form } from 'formik';
import styled from 'styled-components';
import { SIZES } from '../../../theme/fonts.const';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.m};
  width: 250px;

  > button {
    margin: 0 auto;
    max-width: 200px;
    margin-top: ${SIZES.m};
  }

  @media screen and (min-width: 400px) {
    width: 300px;
  }
`;
