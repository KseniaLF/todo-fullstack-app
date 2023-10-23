import styled from 'styled-components';
import { Button } from '../../../theme/common.styled';
import { SIZES } from '../../../theme/fonts.const';

export const getCustomStyles = (large: boolean) => ({
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: large ? '1000px' : '500px',
    height: large ? '600px' : '400px',
    maxWidth: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const CloseButton = styled(Button)`
  position: absolute;
  padding: 0;
  top: 10px;
  right: 10px;
  width: ${SIZES.l};
  height: ${SIZES.l};
`;
