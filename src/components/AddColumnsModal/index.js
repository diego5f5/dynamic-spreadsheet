import React, { useState } from "react";

// Components
import SpecifySelectOptions from "../SpecifySelectOptions";

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
  Divider,
} from "./styles";

export default function AddColumnsModal({ closeModal, handleSave }) {
  const [columnTitle, setColumnTitle] = useState("");
  const [columnType, setColumnType] = useState("text");
  const [isRequired, setIsRequired] = useState(false);
  const [selectOptions, setSelectOptions] = useState([]);

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

          <Divider />

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

          <Divider />

          {columnType === "select" ? (
            <>
              <LabelText>Specify Items:</LabelText>
              <SpecifySelectOptions
                setSelectOptions={(options) => setSelectOptions(options)}
              />
              <Divider />
            </>
          ) : null}

          <CheckBoxContainer onClick={() => setIsRequired(!isRequired)}>
            {isRequired ? <CheckedIcon /> : <UncheckedIcon />}
            Required
          </CheckBoxContainer>

          <Divider />

          <ButtonsContainer>
            <ModalButton
              onClick={() => {
                handleSave({
                  columnTitle,
                  columnType,
                  isRequired,
                  selectOptions,
                  rows: [],
                });
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
