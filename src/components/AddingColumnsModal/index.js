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
  TitleInput,
  OptionsContainer,
  OptionTypeContainer,
  CheckBoxContainer,
  UncheckedIcon,
  CheckedIcon,
  ButtonsContainer,
  ModalButton,
} from "./styles";

export default function AddingColumnsModal({ closeModal, handleSave }) {
  const [columnTitle, setColumnTitle] = useState("");
  const [columnType, setColumnType] = useState("text");
  const [isRequired, setIsRequired] = useState(false);

  return (
    <Modal>
      <ModalContent>
        <ModalHeaderContainer>
          <ModalHeaderText>New Column</ModalHeaderText>
          <CloseModal onClick={() => closeModal()}>&times;</CloseModal>
        </ModalHeaderContainer>
        <ModalBodyContainer>
          <LabelText>Title:</LabelText>
          <TitleInput
            value={columnTitle}
            placeholder={"Column Title"}
            onChange={(e) => {
              setColumnTitle(e.currentTarget.value);
            }}
          />

          <LabelText>Type:</LabelText>
          <OptionsContainer>
            <OptionTypeContainer
              selected={columnType === "text"}
              onClick={() => setColumnType("text")}
            >
              Text
            </OptionTypeContainer>
            <OptionTypeContainer
              selected={columnType === "number"}
              onClick={() => setColumnType("number")}
            >
              Number
            </OptionTypeContainer>
            <OptionTypeContainer
              selected={columnType === "date"}
              onClick={() => setColumnType("date")}
            >
              Date
            </OptionTypeContainer>
            <OptionTypeContainer
              selected={columnType === "select"}
              onClick={() => setColumnType("select")}
            >
              Select
            </OptionTypeContainer>
          </OptionsContainer>

          <CheckBoxContainer onClick={() => setIsRequired(!isRequired)}>
            {isRequired ? <CheckedIcon /> : <UncheckedIcon />}
            Required
          </CheckBoxContainer>

          <ButtonsContainer>
            <ModalButton
              onClick={() => {
                handleSave({ columnTitle, columnType, isRequired, rows: [] });
                closeModal();
              }}
            >
              Save
            </ModalButton>
            <ModalButton cancel onClick={() => closeModal()}>
              Cancel
            </ModalButton>
          </ButtonsContainer>
        </ModalBodyContainer>
      </ModalContent>
    </Modal>
  );
}
