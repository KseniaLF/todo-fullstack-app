import React, { useState } from 'react';
import Modal from 'react-modal';
import { CloseButton, getCustomStyles } from './modal.styles';
import { Button } from '../../../theme/common.styled';

export const ModalComponent = ({
  action,
  children,
  isOpen = false,
  large = false
}: {
  action: string;
  children: JSX.Element;
  isOpen?: boolean;
  large?: boolean;
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Button onClick={openModal} type="button">
        {action}
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={getCustomStyles(large)}
      >
        <div>
          {children}

          <CloseButton onClick={closeModal} type="button">
            X
          </CloseButton>
        </div>
      </Modal>
    </>
  );
};
