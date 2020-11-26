import React, { useState } from "react";

// Styles
import {
  Modal,
  ModalContent,
  ModalHeaderContainer,
  ModalHeaderText,
  CloseModal,
  ModalBodyContainer,
  LabelText,
  NameInput,
  OptionsContainer,
  OptionTypeContainer,
  CheckBoxContainer,
  UncheckedIcon,
  CheckedIcon,
  ButtonsContainer,
  ModalButton,
} from "./styles";

export default function AddingColumnsModal({ closeModal, handleSave }) {
  const [isRequired, setIsRequired] = useState(false);
  const [columnType, setColumnType] = useState({
    text: true,
    number: false,
    date: false,
    select: false,
  });

  return (
    <Modal>
      <ModalContent>
        <ModalHeaderContainer>
          <ModalHeaderText>New Column</ModalHeaderText>
          <CloseModal onClick={() => closeModal()}>&times;</CloseModal>
        </ModalHeaderContainer>
        <ModalBodyContainer>
          <LabelText>Name:</LabelText>
          <NameInput />

          <LabelText>Type:</LabelText>
          <OptionsContainer>
            <OptionTypeContainer
              selected={columnType.text}
              onClick={() =>
                setColumnType({
                  text: true,
                  number: false,
                  date: false,
                  select: false,
                })
              }
            >
              Text
            </OptionTypeContainer>
            <OptionTypeContainer
              selected={columnType.number}
              onClick={() =>
                setColumnType({
                  text: false,
                  number: true,
                  date: false,
                  select: false,
                })
              }
            >
              Number
            </OptionTypeContainer>
            <OptionTypeContainer
              selected={columnType.date}
              onClick={() =>
                setColumnType({
                  text: false,
                  number: false,
                  date: true,
                  select: false,
                })
              }
            >
              Date
            </OptionTypeContainer>
            <OptionTypeContainer
              selected={columnType.select}
              onClick={() =>
                setColumnType({
                  text: false,
                  number: false,
                  date: false,
                  select: true,
                })
              }
            >
              Select
            </OptionTypeContainer>
          </OptionsContainer>

          <CheckBoxContainer onClick={() => setIsRequired(!isRequired)}>
            {isRequired ? <CheckedIcon /> : <UncheckedIcon />}
            Required
          </CheckBoxContainer>

          <ButtonsContainer>
            <ModalButton onClick={() => handleSave()}>Save</ModalButton>
            <ModalButton cancel onClick={() => closeModal()}>
              Cancel
            </ModalButton>
          </ButtonsContainer>
        </ModalBodyContainer>
      </ModalContent>
    </Modal>
  );
}
