import styled from 'styled-components';
import { Button } from '../../../theme/common.styled';
import { SIZES } from '../../../theme/fonts.const';

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    maxWidth: '90%',
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export const CloseButton = styled(Button)`
  position: absolute;
  padding: 0;
  top: 10px;
  right: 10px;
  width: ${SIZES.l};
  height: ${SIZES.l};
`;
