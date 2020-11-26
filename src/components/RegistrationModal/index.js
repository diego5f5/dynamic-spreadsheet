import React from "react";

// Styles
import {
  Modal,
  ModalContent,
  ModalHeaderContainer,
  ModalHeaderText,
  CloseModal,
  ModalBodyContainer,
} from "./styles";

export default function RegistrationModal({ closeModal }) {
  window.onclick = (event) => {
    if (event.target === document.getElementById("myModal")) {
      closeModal();
    }
  };

  return (
    <Modal id="myModal">
      <ModalContent>
        <ModalHeaderContainer>
          <ModalHeaderText>New Column</ModalHeaderText>
          <CloseModal onClick={() => closeModal()}>&times;</CloseModal>
        </ModalHeaderContainer>
        <ModalBodyContainer>Just testing!</ModalBodyContainer>
      </ModalContent>
    </Modal>
  );
}
