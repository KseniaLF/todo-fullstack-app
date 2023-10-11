import React, { useState } from 'react';
import Modal from 'react-modal';
import { CloseButton, customStyles } from './modal.styles';
import { Button } from '../../../theme/common.styled';

export const ModalComponent = ({ action, children }: { action: string; children: JSX.Element }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
        style={customStyles}
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
