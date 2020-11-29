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

// Component to render the column creation modal
const AddColumnsModal = ({ closeModal, handleSave }) => {
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
          {/* Field to assign a name to the column */}
          <LabelText>Title:</LabelText>
          <TitleInput
            value={columnTitle}
            placeholder={"Column Title"}
            onChange={(e) => {
              setColumnTitle(e.currentTarget.value);
            }}
          />

          <Divider />

          {/* Selection menu for column type */}
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

          {/* when the column type is "select", then the component responsible for specifying the options will be rendered */}
          {columnType === "select" ? (
            <>
              <LabelText>Specify Items:</LabelText>
              <SpecifySelectOptions
                setSelectOptions={(options) => setSelectOptions(options)}
              />
              <Divider />
            </>
          ) : null}

          {/* Checkbox to define whether the column is required or not */}
          <CheckBoxContainer onClick={() => setIsRequired(!isRequired)}>
            {isRequired ? <CheckedIcon /> : <UncheckedIcon />}
            Required
          </CheckBoxContainer>

          <Divider />

          {/* Buttons with options to save and cancel saving */}
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
};

export default AddColumnsModal;
